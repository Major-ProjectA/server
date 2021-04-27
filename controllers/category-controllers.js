import CategoryData from "../models/Category-models.js";

export const getCategories = async (req, res) => {
  try {
    const allCategories = await CategoryData.find();

    // console.log(allCategories);

    // Trang tham khảo về res.status: https://restapitutorial.com/httpstatuscodes.html
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
