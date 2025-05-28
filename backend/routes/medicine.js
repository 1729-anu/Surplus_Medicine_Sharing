const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Medicine schema
const Medicine = mongoose.model('Medicine', new mongoose.Schema({
    name: String,
    quantity: Number,
    location: String,
    contact: String
}));

// POST route
router.post('/', async (req, res) => {
    const newMedicine = new Medicine(req.body);
    await newMedicine.save();
    res.status(201).send('Medicine added');
});

// GET route
router.get('/', async (req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
});

module.exports = router;
