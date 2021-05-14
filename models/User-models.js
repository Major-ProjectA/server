import mongoose from "mongoose";
export const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  dob: { type: Date, required: false },
  address: { 
    street: { type: String, required:false },
    district: { type: String, required:false },
    city: { type: String, required:false },
  },
  role: { type: String, enum : ['user', 'employer', 'admin'] },
  gender: { type: String, required: false },
  tel: { type: Number, required: false },
  cvs : [{type : mongoose.Schema.Types.ObjectId, ref: 'Cv'}],
  jobs : [{type : mongoose.Schema.Types.ObjectId, ref: 'Job'}]
});

const User = mongoose.model("User", UserSchema);
export default User;