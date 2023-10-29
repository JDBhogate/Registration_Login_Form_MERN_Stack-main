// routes/homeData.js
const express = require('express');
const router = express.Router();
const HomeData = require('./models/HomeData');

// POST data to create or update home data
router.post('/homeData', async (req, res) => {
  try {
    const { userId, age, gender, dob, mobile } = req.body;

    // Create or update home data document in the database
    const homeData = await HomeData.findOneAndUpdate(
      { userId },
      { age, gender, dob, mobile },
      { upsert: true, new: true }
    );

    res.json(homeData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
