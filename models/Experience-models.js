import mongoose from "mongoose";

const ExperienceSchema = mongoose.Schema({
  expDescription: {
    type: String,
    default: '',
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);
export default Experience;