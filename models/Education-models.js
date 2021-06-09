import mongoose from "mongoose";

const EducationSchema = mongoose.Schema({
  education: {
    type: String,
    default: '',
  },
});

const Education = mongoose.model("Education", EducationSchema);

export default Education;