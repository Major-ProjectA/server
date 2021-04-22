import CompanyData from "../models/company-models.js";

export const getCompanys = async (req, res) => {
  try {
    const allCompanys = await CompanyData.find();

    console.log(allCompanys);

    res.status(200).json(allCompanys);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCompany = async (req, res) => {
  const company = req.body;

  console.log(company);

  const newCompany = new CompanyData(company);
  try {
    await newCompany.save();

    res.status(201).json(newCompany);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
