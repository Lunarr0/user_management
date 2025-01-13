const express = require('express');
const router = express.Router();
const User = require('../model/User');

// @route   POST /api/users
// @desc    Add a new user
// @access  Public
router.post('/users', async (req, res) => {
    try {
        const { name, email, photo, role } = req.body;

        // Create new user
        const user = new User({
            name,
            email,
            photo,
            role
        });

        // Save user to database
        const savedUser = await user.save();

        res.status(201).json({
            success: true,
            data: savedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;