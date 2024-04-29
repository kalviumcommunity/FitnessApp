const mongoose = require("mongoose");

const FitnessSchema = new mongoose.Schema({
  trainer: {
    type: mongoose.Types.ObjectId,
    ref: "Trainer",
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 8,
  },
  category: {
    type: String,
    enum: ["chest","biceps","triceps","back","shoulder","leg","abs[cardio]"],
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  maxParticipants: {
    type: Number,
    required: true,
    min: 1,
  },
  featured: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model("home", FitnessSchema);