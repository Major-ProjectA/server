import mongoose from "mongoose";

const CvSchema = mongoose.Schema({
  profile: [{ type: mongoose.Types.ObjectId, required: true, ref: "Profile" }],
  education: [{ type: mongoose.Types.ObjectId, required: true, ref: "Education" }],
  project: [{ type: mongoose.Types.ObjectId, required: true, ref: "Project" }],
  experience: [{ type: mongoose.Types.ObjectId, required: true, ref: "Experience" }],
  extra: [{ type: mongoose.Types.ObjectId, required: true, ref: "Extra" }],
  creator: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Cv = mongoose.model('Cv', CvSchema);

export default Cv;