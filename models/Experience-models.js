import mongoose from "mongoose";

const ExperienceSchema = mongoose.Schema({
  companyName: {
    type: String,
    default: '',
  },
  duration: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    default: '',
  },
  expDescription: {
    type: String,
    default: '',
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);
export default Experience;