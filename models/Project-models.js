import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  project : []
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;