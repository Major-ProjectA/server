import CV from "../models/Cv-models.js";
import mongoose from "mongoose";

import Profile from "../models/Profile-models.js";
import Education from "../models/Education-models.js";
import Project from "../models/Project-models.js";
import Experience from "../models/Experience-models.js";
import Extra from "../models/Extra-models.js";

export const getCv = async (req, res, next) => {

}

export const getCvById = async (req, res, next) => {
}

export const getCvByUserId = async (req, res, next) => {
}

export const createCV = async (req, res, next) => {
  const { userId } = req.body;
  
  const createdCV = new CV({ userId })

  try {
    await createdCV.save();
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }
  res.status(201).json({ Message: "Create CV successfull.", user: createdCV.toObject({ getters: true }) });
}

export const createProfile = async (req, res, next) => {
  const {
    cvId,
    firstname,
    lastname,
    dob,
    email,
    address,
    phone
  } = req.body;

  const createdProfile = new Profile({
    cvId,
    firstname,
    lastname,
    dob,
    email,
    address,
    phone
  });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(400).json({ errorMessage: "Can not find this cv, please try again" });
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdProfile.save({ session: sess });
    cv.profile.push(createdProfile);
    await cv.save({ sess: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errorMessage: "Fail." });
  }

  res.status(201).json({ cv: createdProfile });
};

export const createEducation = async (req, res, next) => {
  const {
    cvId,
    collegeName,
    collegeMajor,
    collegeQualification,

    schoolName,
    schoolMajor,
    schoolQualification,
  } = req.body;

  const createdEducation = new Education({
    cvId,
    college: {
      collegeName,
      collegeMajor,
      collegeQualification,
    },
    school: {
      schoolName,
      schoolMajor,
      schoolQualification,
    },
  });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(400).json({ errorMessage: "Can not find this cv, please try again" });
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdEducation.save({ session: sess });
    cv.education.push(createdEducation);
    await cv.save({ sess: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errorMessage: "Fail." });
  }

  res.status(201).json({ cv: createdEducation });
};

export const createProject = async (req, res, next) => {
  const {
    cvId,
    projectName,
    projectDescription,
  } = req.body;

  const createdProject = new Project({
    cvId,
    projectName,
    projectDescription,
  });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(400).json({ errorMessage: "Can not find this cv, please try again" });
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdProject.save({ session: sess });
    cv.project.push(createdProject);
    await cv.save({ sess: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errorMessage: "Fail." });
  }

  res.status(201).json({ cv: createdProject });
};

export const createExperience = async (req, res, next) => {
  const {
    cvId,
    companyName,
    duration,
    position,
    expDescription,
  } = req.body;

  const createdExperience = new Experience({
    cvId,
    companyName,
    duration,
    position,
    expDescription,
  });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(400).json({ errorMessage: "Can not find this cv, please try again" });
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdExperience.save({ session: sess });
    cv.experience.push(createdExperience);
    await cv.save({ sess: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errorMessage: "Fail." });
  }

  res.status(201).json({ cv: createdExperience });
};

export const createExtras = async (req, res, next) => {
  const {
    cvId,
    skill,
    interest,
  } = req.body;

  const createdExtras = new Extra({
    cvId,
    skill,
    interest,
  });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(400).json({ errorMessage: "Can not find this cv, please try again" });
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdExtras.save({ session: sess });
    cv.extra.push(createdExtras);
    await cv.save({ sess: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errorMessage: "Fail." });
  }

  res.status(201).json({ cv: createdExtras });
};

export const updateCv = async (req, res, next) => {
}

export const deleteCv = async (req, res, next) => {
}

export const viewCv = async (req, res, next) => {
}