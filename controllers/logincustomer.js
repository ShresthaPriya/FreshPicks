const User = require('../models/UserModel');

const loginCustomer = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Email from request:', email); // Debug log
        const user = await User.findOne({ email });
        console.log('User from database:', user); // Debug log

        if (!user) {
            return res.status(401).json({ message: 'Invalid email.' });
        }

        // Directly compare the provided password with the one stored in the database
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Passwords match, user is authenticated
        res.status(200).json({ user });
        console.log("User logged in successfully");

    } catch (error) {
        // If any error occurs, return a 500 status with the error message
        res.status(500).json({ message: error.message });
        console.error(error);
    }
};

module.exports = loginCustomer;
