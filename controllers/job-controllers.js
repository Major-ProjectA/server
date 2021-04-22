import JobData from "../models/Job-models.js";

export const getJobs = async (req, res) => {
  try {
    const allJobs = await JobData.find();

    console.log(allJobs);

    // Trang tham khảo về res.status: https://restapitutorial.com/httpstatuscodes.html
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const createJob = async (req, res) => {
//   const job = req.body;
//   console.log(job);
//   const newJob = new JobData(job);
//   try {
//     await newJob.save();

//     res.status(201).json(newJob);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };
