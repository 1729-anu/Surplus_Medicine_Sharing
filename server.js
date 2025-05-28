// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Use middleware
app.use(cors());
app.use(express.json());

// Import routes
const medicineRoutes = require('./routes/medicine');
app.use('/api/medicines', medicineRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/medicineshare', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Start the server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
