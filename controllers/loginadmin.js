// // const Admin = require('../models/adminModel');

// // const loginAdmin = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;
// //         // console.log('Email from request:', email); // Debug log
// //         const admin = await Admin.findOne({ email });
// //         // console.log('Password from database:', password); // Debug log

// //         if (!admin) {
// //             return res.status(401).json({ message: 'Invalid email or password' });
// //         }

// //         // Directly compare the provided password with the one stored in the database
// //         const passwordMatch = await bcrypt.compare(password, admin.password);
// //         if (!passwordMatch) {
// //             return res.status(401).json({ message: 'Invalid email or password' });
// //         }

// //         // Passwords match, user is authenticated
// //         res.status(200).json({ message: 'Login success',admin });
// //         //console.log("Admin logged in successfully");

// //     } catch (error) {
// //         // If any error occurs, return a 500 status with the error message
// //         res.status(500).json({ message: error.message });
// //         console.error(error);
// //     }
// // };

// // module.exports = loginAdmin;

// // // const User = require('../models/adminModel');
// // // const bcrypt = require('bcrypt');

// // // const loginAdmin = async (req, res) => {
// // //     try {
// // //         const { email, password } = req.body;
// // //         console.log('Email from request:', email); // Debug log
// // //         const user = await User.findOne({ email });
// // //         console.log('User from database:', user); // Debug log

// // //         if (!user) {
// // //             return res.status(401).json({ message: 'Invalid email.' });
// // //         }

// // //         // Securely compare hashed passwords
// // //         const passwordsMatch = await bcrypt.compare(password, user.password);
// // //         if (!passwordsMatch) {
// // //             console.log('Incorrect password');
// // //             return res.status(401).json({ message: 'Invalid password' });
// // //         }

// // //         // Passwords match, user is authenticated
// // //         console.log("User logged in successfully");
// // //         res.status(200).json({ user });

// // //     } catch (error) {
// // //         // If any error occurs, return a 500 status with the error message
// // //         console.error('Error logging in user:',error.message);
// // //         res.status(500).json({ message: error.message });

// // //     }
// // // };

// // // module.exports = loginAdmin;


// const bcrypt = require('bcrypt');
// const Admin = require('../models/adminModel');

// const loginAdmin = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         console.log('Email from request:', email); // Debug log
//         const admin = await Admin.findOne({ email });
//         console.log('Admin from database:', admin); // Debug log

//         if (!admin) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Compare the provided password with the hashed password in the database
//         const passwordMatch = await bcrypt.compare(password, admin.password);

//         if (!passwordMatch) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Passwords match, user is authenticated
//         res.status(200).json({ message: 'Login successful', admin });
//         console.log("Admin logged in successfully");

//     } catch (error) {
//         // If any error occurs, return a 500 status with the error message
//         res.status(500).json({ message: error.message });
//         console.error(error);
//     }
// };

// module.exports = loginAdmin;

// // const admin = require('../models/adminModel');

// // const loginAdmin = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;
// //         console.log('Email from request:', email); // Debug log
// //         const admin = await Admin.findOne({ email });
// //         console.log('Admin from database:', admin); // Debug log

// //         if (!admin) {
// //             return res.status(401).json({ message: 'Invalid email.' });
// //         }

// //         // Directly compare the provided password with the one stored in the database
// //         if (admin.password !== password) {
// //             return res.status(401).json({ message: 'Invalid password' });
// //         }

// //         // Passwords match, user is authenticated
// //         res.status(200).json({ admin });
// //         console.log("User logged in successfully");

// //     } catch (error) {
// //         // If any error occurs, return a 500 status with the error message
// //         res.status(500).json({ message: error.message });
// //         console.error(error);
// //     }
// // };

// // module.exports = loginAdmin;


const User = require('../models/adminModel');

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email.' });
        }

        // Directly compare the provided password with the one stored in the database
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Passwords match, user is authenticated
        res.status(200).json({ user });
        console.log("Admin logged in successfully");

    } catch (error) {
        // If any error occurs, return a 500 status with the error message
        res.status(500).json({ message: error.message });
        console.error(error);
    }
};

module.exports = loginAdmin;
