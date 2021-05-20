import mongoose from "mongoose";

const EducationSchema = mongoose.Schema({
  college: {
    collegeName: { type: String, required: true },
    collegeMajor: { type: String, require: true },
    collegeQualification: { type: String, require: true },
  },

  school: {
    schoolName: { type: String, required: false },
    schoolMajor: { type: String, require: false },
    schoolQualification: { type: String, require: false },
  },
});

const Education = mongoose.model("Education", EducationSchema);

export default Education;