import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;