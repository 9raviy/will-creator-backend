const express = require("express");
const router = express.Router();
const Will = require("../models/will");

router.get("/", async (req, res) => {
  const email = req.query.email; // get the email from query parameters
  try {
    const wills = await Will.find({ email });
    res.json(wills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, content, email } = req.body;
  const newWill = new Will({ title, content, email });
  try {
    await newWill.save();
    res.status(201).json(newWill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
