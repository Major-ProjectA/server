import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  projectName: {
    type: String,
    default: "",
  },
  projectDescription: {
    type: String,
    default: "",
  },
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;