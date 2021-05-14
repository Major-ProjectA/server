import mongoose from "mongoose";
export const Schema = mongoose.Schema;

const JobSchema = new Schema({
  detail: { type: String, required: true },
  benefit: { type: String, required: true },
  contact: {
    contactName: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactAddress: { type: String, required: true },
    contactPhone: { type: String, required: true },
  },
  certification: { type: String, required: true },
  salary: {
    from: { type: Number, required: true },
    to: { type: Number, required: true },
  },
  requirement: { type: String, required: true },
  imgCom: { type: String, required: true },
  workingTime: { type: String, required: true },
  position: { type: String, required: true },
  location: {
    street: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
  },
  nameCom: { type: String, required: true },
  siteCom: { type: String, required: true },
  thumbnail: { type: String, required: true },
  category: { type: String, required: true },
  isHot: { type: String, required: true },
  numofRecruit: { type: Number, required: true },
  exp: { type: String, required: true },
  createDay: { type: Date, default: null },
  startDay: { type: Date },
  endDay: { type: Date },
});

const Jobs = mongoose.model("Job", JobSchema);
export default Jobs;
