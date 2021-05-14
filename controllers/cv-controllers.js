import Cv from "../models/Cvs-models.js";
import CV from "../models/Cv-models.js";
import Profile from "../models/Profile-models.js";

export const getCv = async (req, res, next) => {
}

export const getCvById = async (req, res, next) => {
}

export const getCvByUserId = async (req, res, next) => {
}

export const createCV = async (req, res, next) => {
  const {
    profile,
  } = req.body;

  const createdCV = new CV({
    profile: [],
  })

  try {
    await createdCV.save();
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again"});
  }
  res.status(201).json({Message: "Create CV successfull.", user: createdCV.toObject({getters:true})});
}

export const createCv = async (req, res, next) => {
    try {
    const { 
      firstname,
      lastname,
      email,
      phone,
      dob,
      address,

      // Education Information
      college,
      fromyear,
      toyear,
      qualification,
      description,

      // Project Information...
      title,
      linkProject,
      projectDescription,

      // Experience Information
      institute,
      position,
      duration,
      experienceDescription,

      // Extra Information
      skill1,
      skill2,
      interest1,
      interest2,
    } = req.body;

    // if (!firstname || !lastname || !email || !phone || !college || !fromyear1 || !toyear1 || !qualification1 || !description1 || !institute1 || !position1 || !duration1 || !experienceDescription1 || !title1 || !link1 || !projectDescription1 || !skill1 || !skill2 || !interest1 || !interest2)
    //   return res
    //     .status(400)
    //     .json({ errorMessage: "Please enter all required fields." });

    const createdCV = new Cv({
      firstname,
      lastname,
      email,
      phone,
      dob,
      address,

      // Education Information
      college,
      fromyear,
      toyear,
      qualification,
      description,

      // Project Information...
      title,
      linkProject,
      projectDescription,

      // Experience Information
      institute,
      position,
      duration,
      experienceDescription,

      // Extra Information
      skill1,
      skill2,
      interest1,
      interest2,
    })

    try {
      await createdCV.save();
    } catch (error) {
      return res.status(400).json({ errorMessage: "Some thing went wrong, please try again"});
    }
  
    res.status(201).json({Message: "Create CV successfull.", user: createdCV.toObject({getters:true})});
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

export const createProfile = async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errorMessage: "Some thing went wrong, please try again"});
  // }

  const {
    cvid,
    firstname,
    lastname,
  } = req.body;

  const createdProfile = new Profile({
    cvid,
    firstname,
    lastname,
  });

  let cv;
  try {
    cv = await Cv.findById(cvid);
  } catch {
    return res.status(400).json({ errorMessage: "Some thing went wrong, please try again"});
  }

  if (!cv) {
    return res.status(400).json({ errorMessage: "Can not find this cv, please try again"});
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
    return res.status(400).json({ errorMessage: "Fail."});
  }

  res.status(201).json({ product: createdProfile });
};

export const updateCv = async (req, res, next) => {
}

export const deleteCv = async (req, res, next) => {
}

export const viewCv = async (req, res, next) => {
}