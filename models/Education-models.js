import mongoose from "mongoose";

const EducationSchema = mongoose.Schema({
  education : []
});

const Education = mongoose.model("Education", EducationSchema);

export default Education;