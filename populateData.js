// populateData.js
const mongoose = require('mongoose');
const Sale = require('./models/Sale'); // Assuming Sale model is in the same directory

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/sales'; // Update this with your MongoDB URI

// Sales sample data
const sales = [
  { amount: 100, sold: true, date: new Date('2024-12-10') },
  { amount: 200, sold: true, date: new Date('2024-12-15') },
  { amount: 150, sold: false, date: new Date('2024-12-18') },
  { amount: 50, sold: false, date: new Date('2024-12-20') },
  { amount: 80, sold: true, date: new Date('2024-12-25') },
  { amount: 120, sold: true, date: new Date('2024-12-28') },
  { amount: 300, sold: false, date: new Date('2024-12-30') }
];

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Insert sample data
    Sale.insertMany(sales)
      .then(() => {
        console.log('Sample sales data inserted');
        mongoose.connection.close(); // Close connection
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
