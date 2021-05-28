import CV from "../models/Cv-models.js";
import User from "../models/User-models.js";
import Profile from "../models/Profile-models.js";
import Education from "../models/Education-models.js";
import Project from "../models/Project-models.js";
import Experience from "../models/Experience-models.js";
import Extra from "../models/Extra-models.js";

import mongoose from "mongoose";
import Cv from "../models/Cv-models.js";

export const getCv = async (req, res, next) => {
}

export const getCvById = async (req, res, next) => {
}

export const getCvByUserId = async (req, res, next) => {
}

export const createCV = async (req, res, next) => {
  const { userId, cvName } = req.params;

  const createdCV = new CV({ 
    userId,
    cvName,
  })

  let user;
  try {
    user = await User.findById(userId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!user) {
    return res.status(401).json({ errorMessage: "Can not find this user, please try again" });
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    createdCV.creator = userId;
    await createdCV.save({ session: sess });
    user.cvs.push(createdCV);
    await user.save({ sess: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ cv: createdCV });
}

export const updateCv = async (req, res, next) => {
  const {
    cvName,
  } = req.body;

  const cvId = req.params.cvId;

  let cv;
  try {
    cv = await Cv.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  cv.cvName = cvName;

  if (!cvId) {
    return res.status(401).json({ errorMessage: "Can not find this cv, please try again" });
  }

  try {
    await cv.save();
  } catch (err) {
    console.log(err);
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ cv: cv.toObject({ getters: true }) });
}

export const createProfile = async (req, res, next) => {
  const { cvId } = req.params;

  const createdProfile = new Profile({ cvId });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(401).json({ errorMessage: "Can not find this cv, please try again" });
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
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ cv: createdProfile });
};

export const updateProfile = async (req, res, next) => {
  const {
    firstname,
    lastname,
    dob,
    email,
    address,
    phone
  } = req.body;

  const profileId = req.params.profileId;

  let profile;
  try {
    profile = await Profile.findById(profileId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  profile.firstname = firstname;
  profile.lastname = lastname;
  profile.dob = dob;
  profile.email = email;
  profile.address = address;
  profile.phone = phone;

  if (!profileId) {
    return res.status(401).json({ errorMessage: "Can not find this profile, please try again" });
  }

  try {
    await profile.save();
  } catch (err) {
    console.log(err);
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ profile: profile.toObject({ getters: true }) });
};

export const createEducation = async (req, res, next) => {
  const { cvId } = req.params;

  const createdEducation = new Education({ cvId });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(401).json({ errorMessage: "Can not find this cv, please try again" });
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
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ cv: createdEducation });
};

export const updateEducation = async (req, res, next) => {
  const edu = req.body.education;

  const educationId = req.params.eduId;
  let education;
  try {
    education = await Education.findById(educationId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  education.education = edu;

  if (!educationId) {
    return res.status(401).json({ errorMessage: "Can not find this education, please try again" });
  }

  try {
    await education.save();
  } catch (err) {
    console.log(err);
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ education: education.toObject({ getters: true }) });
};

export const createProject = async (req, res, next) => {
  const { cvId } = req.params;

  const createdProject = new Project({ cvId });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(401).json({ errorMessage: "Can not find this cv, please try again" });
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
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ cv: createdProject });
};

export const updateProject = async (req, res, next) => {
  const proj = req.body.project;

  const projectId = req.params.projectId;

  let project;
  try {
    project = await Project.findById(projectId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  project.project = proj

  if (!projectId) {
    return res.status(401).json({ errorMessage: "Can not find this project, please try again" });
  }

  try {
    await project.save();
  } catch (err) {
    console.log(err);
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ project: project.toObject({ getters: true }) });
};

export const createExperience = async (req, res, next) => {
  const { cvId } = req.params;

  const createdExperience = new Experience({ cvId });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(401).json({ errorMessage: "Can not find this cv, please try again" });
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
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ cv: createdExperience });
};

export const updateExperience = async (req, res, next) => {
  const {
    companyName,
    duration,
    position,
    expDescription,
  } = req.body;

  const experienceId = req.params.expId;

  let experience;
  try {
    experience = await Experience.findById(experienceId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  experience.companyName = companyName;
  experience.duration = duration;
  experience.position = position;
  experience.expDescription = expDescription;

  if (!experienceId) {
    return res.status(401).json({ errorMessage: "Can not find this experience, please try again" });
  }

  try {
    await experience.save();
  } catch (err) {
    console.log(err);
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ experience: experience.toObject({ getters: true }) });
};

export const createExtra = async (req, res, next) => {
  const { cvId } = req.params;

  const createdExtra = new Extra({ cvId });

  let cv;
  try {
    cv = await CV.findById(cvId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  if (!cv) {
    return res.status(401).json({ errorMessage: "Can not find this cv, please try again" });
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdExtra.save({ session: sess });
    cv.extra.push(createdExtra);
    await cv.save({ sess: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ cv: createdExtra });
};

export const updateExtra = async (req, res, next) => {
  const {
    addInfor,
  } = req.body;

  const extraId = req.params.extraId;

  let extra;
  try {
    extra = await Extra.findById(extraId);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again" });
  }

  extra.addInfor = addInfor;

  if (!extraId) {
    return res.status(401).json({ errorMessage: "Can not find this experience, please try again" });
  }

  try {
    await extra.save();
  } catch (err) {
    console.log(err);
    return res.status(402).json({ errorMessage: "Fail." });
  }
  res.status(201).json({ extra: extra.toObject({ getters: true }) });
};

export const deleteCv = async (req, res, next) => {
}

export const viewCv = async (req, res, next) => {
}