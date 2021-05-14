import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model("Project", ProfileSchema);
export default Profile;