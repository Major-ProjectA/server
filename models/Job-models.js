import mongoose from "mongoose";

export const Schema = mongoose.Schema;

const JobSchema = new Schema({
  detail: { type: String },
  benifit: { type: String },
  contact: {
    contactName: { type: String },
    contactEmail: { type: String },
    contactAddress: { type: String },
    contactPhone: { type: String },
  },
  certification: { type: String },
  salary: {
    from: { type: String },
    to: { type: String },
  },
  requirement: { type: String },
  imgCom: { type: String },
  workingTime: { type: String },
  position: { type: String },
  location: {
    street: { type: String },
    district: { type: String },
    city: { type: String },
  },
  nameCom: { type: String },
});

const Jobs = mongoose.model("Job", JobSchema);

export default Jobs;
