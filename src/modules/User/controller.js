const User = require('./model');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

class UserController {
    static async login(req, res) {
        try {
            // Get user input
            const { email, password } = req.body;

            // Validate user input
            if (!(email && password)) {
                return res.status(400).json({ result: false, message: "Email & password field is required"});
            }
            // Validate if user exist in our database
            const user = await User.findOne({ email });

            if (user && (await bcrypt.compare(password, user.password) && user.is_admin)) {
                // Create token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "8h",
                    }
                );
                // save user token
                user.token = token;
                return res.status(200).json({ result: true, user: user});
            }
            return res.status(400).json({ result: false, message: "Invalid Credentials"});
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = UserController;