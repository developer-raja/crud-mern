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
    const { id } = req.params;
    const user = await findById({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(422).json({ msg: error });
  }
});

// Update user data by id
const updateUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
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
    const { id } = req.params;
    const deleteUser = await findByIdAndDelete({ _id: id });
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
