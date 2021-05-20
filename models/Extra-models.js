import mongoose from "mongoose";

const ExtraSchema = mongoose.Schema({
  skill: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
});

const Extra = mongoose.model("Extra", ExtraSchema);
export default Extra;