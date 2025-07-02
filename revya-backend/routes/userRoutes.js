const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/add', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    console.log("✅ User saved:", user);
    res.status(201).json({ message: 'User saved successfully', user });
  } catch (error) {
    console.error("❌ Error saving user:", error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get('/users/latest', async (req, res) => {
  try {
    const latestUser = await User.findOne().sort({ createdAt: -1 });
    if (!latestUser) {
      return res.status(404).json({ error: "No users found" });
    }
    res.json(latestUser);
  } catch (error) {
    console.error("❌ Error fetching user:", error.message);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

module.exports = router;
