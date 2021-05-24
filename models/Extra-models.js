import mongoose from "mongoose";

const ExtraSchema = mongoose.Schema({
  skill: {
    type: String,
    default: '',
  },
  interest: {
    type: String,
    default: '',
  },
});

const Extra = mongoose.model("Extra", ExtraSchema);
export default Extra;