import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  career: {
    careerName: { type: String },
    icon: { type: String },
  },
});

const Categories = mongoose.model("Category", CategorySchema);

export default Categories;
