import JobData from "../models/Job-models.js";

// GET ALL Job
export const getJobs = async (req, res) => {
  try {
    const allJobs = await JobData.find();
    // console.log(allJobs);
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// GET Job By ID
export const getJobtById = async (req, res, next) => {
  const jobId = req.params.jid;
  let job;
  try {
    job = await JobData.findById(jobId);
  } catch (err) {
    // const error = new HttpError("Không thể tìm thấy sản phẩm", 500);
    return next(error);
  }
  // if (!job) {
  //   // const error = new HttpError(
  //   //   "Không thể kiếm thấy sản phẩm với thành viên này",
  //   //   404
  //   // );
  //   return next(error);
  // }
  res.json({ job: job.toObject({ getters: true }) });
};
