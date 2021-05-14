import mongoose from "mongoose";

const EducationSchema = mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
});

const Education = mongoose.model("Project", EducationSchema);
export default Education;