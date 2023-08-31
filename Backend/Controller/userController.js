const User = require("../models/User");

module.exports.register = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const usernameCheck = await User.findOne({ name });
      if (usernameCheck)
        return res.json({ msg: "Username already used", status: false });
      const emailCheck = await User.findOne({ email });
      if (emailCheck)
        return res.json({ msg: "Email already used", status: false });
      const user = await User.create({
        email,
        name,
        password,
      });
      delete user.password;
      return res.json({ status: true, user });
    } catch (ex) {
      next(ex);
    }
  };