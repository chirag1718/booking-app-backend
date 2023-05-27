import User from "../model/User.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.boy.password,
    });
    await newUser.save();
    res.status(200).send("User has been created successfully!");
  } catch (err) {
    next(err);
  }
};
