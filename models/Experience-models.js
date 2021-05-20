import mongoose from "mongoose";

const ExperienceSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  expDescription: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);
export default Experience;