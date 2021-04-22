import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  career: {
    careerName: { type: String },
    icon: { type: String },
  },

  salary: {
    type: Number,
    default: 0,
  },

  request: { type: String },

  test: {
    testObj: {
      obj1: { type: String },
      obj2: { type: String },
      obj3: { type: String },
    },
    testObj1: {
      obj4: { type: String },
    },
  },
});

const Jobs = mongoose.model("Job", jobSchema);

export default Jobs;
