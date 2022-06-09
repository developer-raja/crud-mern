const User = require("../models/userSchema");
const asyncHandler = require("../middleware/async");

// Post user data
const postUser = asyncHandler(async (req, res) => {
  const { name, email, age, mobile, work, add, desc } = req.body;

  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    res.status(422).json({ msg: "Please add all fields" });
  }

  try {
    const addUser = new User({
      name,
      email,
      age,
      mobile,
      work,
      add,
      desc,
    });

    await addUser.save();
    res.status(200).json(addUser);
  } catch (error) {
    res.status(422).json({ msg: error });
  }
});

// Get all user data
const getUsers = asyncHandler(async (req, res) => {
  try {
    const userData = await User.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(422).json({ msg: error });
  }
});

// Get user data by id
const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Update user data by id
const updateUser = asyncHandler(async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(422).json({ msg: error });
  }
});

// Delete user by id
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const deleteUser = await User.remove({ _id: req.params.id });
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(422).json({ msg: error });
  }
});

module.exports = {
  postUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
