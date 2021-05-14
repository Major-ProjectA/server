import mongoose from "mongoose";

const CvSchema = mongoose.Schema({
  profile: [{ type: mongoose.Types.ObjectId, required: false, ref: "Profile" }],
  // education: [{ type: mongoose.Types.ObjectId, required: true, ref: "Cv" }],
  // project: [{ type: mongoose.Types.ObjectId, required: true, ref: "Cv" }],
});

const Cv = mongoose.model('Cv', CvSchema);

export default Cv;