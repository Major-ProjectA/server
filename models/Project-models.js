import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  project: {
    type: String,
    default: '',
  },
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;