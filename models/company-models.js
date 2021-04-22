import mongoose from "mongoose";

const CompanySchema = mongoose.Schema({
  imgCom: { type: String },

  position: { type: String },

  nameCom: { type: String },

  salary: {
    from: { type: Number, default: 0 },
    to: { type: Number, default: 0 },
  },

  workingTime: { type: String },

  location: {
    street: { type: String },
    district: { type: String },
    city: { type: String },
  },
});

const Companies = mongoose.model("Company", CompanySchema);

export default Companies;
