const express = require("express");
const router = express.Router();

const {
  postUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/register", postUser);

router.get("/getdata", getUsers);

router.get("/getuser/:id", getUser);

router.put("/updateuser/:id", updateUser);

router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
