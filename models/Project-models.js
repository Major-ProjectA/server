import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  titleProject: {
    type: String,
    required: true,
  },
  desProject: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;