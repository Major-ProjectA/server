import mongoose from "mongoose";

const CvSchema = mongoose.Schema({
  firstname: {type: String, required: false},
  lastname: {type: String, required: false},
  email: {type: String, required: false},
  phone: {type: String, required: false},
  dob: {type: String, required: false},
  address: {type: String, required: false},
  college: {type: String, required: false},
  fromyear: {type: String, required: false},
  toyear: {type: String, required: false},
  qualification: {type: String, required: false},
  description: {type: String, required: false},
  institute: {type: String, required: false},
  position: {type: String, required: false},
  duration: {type: String, required: false},
  experienceDescription: {type: String, required: false},
  title: {type: String, required: false},
  link: {type: String, required: false},
  projectDescription: {type: String, required: false},
  skill1: {type: String, required: false},
  skill2: {type: String, required: false},
  interest1: {type: String, required: false},
  interest2: {type: String, required: false},
});

const Cvs = mongoose.model("Cvs", CvSchema);

export default Cvs;
