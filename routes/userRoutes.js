const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST /save-survey
router.post('/save', async (req, res) => {
    const { answers } = req.body;
    
    if (!answers) {
        return res.status(400).json({ error: 'Answers are required' });
    }

    // Save the answers to MongoDB
    const user = new User({ answers });
    await user.save();

    res.status(200).json({ message: 'Survey saved successfully' });
});
router.post('/email', async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
  
    try {
      const newUser = new User({ email });
      await newUser.save();
      res.status(200).json({ message: "Email saved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to save email", error: error.message });
    }
  });


module.exports = router;
