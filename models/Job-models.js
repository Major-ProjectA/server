import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  // career: {
  //   careerName: { type: String, required: true },
  // },
  // salary: {
  //   saMin: { type: Number, default: 0 },
  //   saMax: { type: Number, default: 0 },
  // },
  // detail: { type: String, required: true },
  // request: { type: String, required: true },
  // benifit: { type: String, required: true },
  // duration: { type: Number, require: true },
  // contact: {
  //   contactName: { type: String, required: true },
  //   contactEmail: { type: String, required: true },
  //   contactAddress: { type: String, required: true },
  //   contactPhone: { type: Number, required: true },
  // },
  // internDuration: { type: Number },

  career: {
    careerName: { type: String },
    icon: { type: String },
  },

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

  salary: {
    type: Number,
    default: 0,
  },

  request: String,
});

const Jobs = mongoose.model("Job", jobSchema);

export default Jobs;
