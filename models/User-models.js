import mongoose from "mongoose";
export const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: true },
  fName: { type: String, required: false },
  lName: { type: String, required: false },
  dob: { type: String, required: false },
  address: { type: String, required: false },
  role: { type: Number, required: false },
  gender: { type: String, required: false },
  contact: { type: String, required: false },
  tel: { type: String, required: false },
});

const User = mongoose.model("User", UserSchema);
export default User;
