const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://raja:raja@cluster0.q73pm.mongodb.net/crud?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(`Error is ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
