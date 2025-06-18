const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userdata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Define the schema with correct field names
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  bmi: Number,
  goal: [String],
  restrictions: [String],
});

// ✅ Define the model
const User = mongoose.model("User", UserSchema);

// ✅ POST /signup route to save user data
app.post("/signup", async (req, res) => {
  const { name, age, gender, height, weight, bmi, goal, restrictions } =
    req.body;

  try {
    const user = new User({
      name,
      age,
      gender,
      height,
      weight,
      bmi,
      goal,
      restrictions,
    });

    await user.save();
    console.log("✅ Received user data:", req.body);
    res.status(201).send({ message: "User saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving user:", error);
    res.status(500).send({ error: "Failed to save user" });
  }
});

// ✅ GET /latestuser route to return the most recent user
app.get("/latestuser", async (req, res) => {
  try {
    const user = await User.findOne().sort({ _id: -1 });
    res.json(user);
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    res.status(500).send({ error: "Failed to fetch user" });
  }
});

// ✅ Start the server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
