import mongoose from "mongoose";

const EducationSchema = mongoose.Schema({
  college: {
    collegeName: { type: String, default: "" },
    collegeMajor: { type: String, default: "" },
    collegeQualification: { type: String, default: "" },
  },

  school: {
    schoolName: { type: String, default: "" },
    schoolMajor: { type: String, default: "" },
    schoolQualification: { type: String, default: "" },
  },
});

const Education = mongoose.model("Education", EducationSchema);

export default Education;