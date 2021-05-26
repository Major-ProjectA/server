import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
  firstname: {
    type: String,
    default: ""
  },
  lastname: {
    type: String,
    default: ""
  },
  dob: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  address: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;