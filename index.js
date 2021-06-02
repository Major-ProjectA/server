import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

import UserRoutes from "./routes/user-routes.js";
import CategoryRoutes from "./routes/category-routes.js";
import UploadRoutes from "./routes/upload-router.js";
import JobRoutes from "./routes/job-routes.js";
import CVRoutes from "./routes/cv-routes.js";

dotenv.config();
//CONFIG FILE
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//ROUTER
app.use("/api/categories", CategoryRoutes);
app.use("/api/jobs", JobRoutes);
app.use("/api/photo", UploadRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/cvs", CVRoutes);

const PORT = process.env.PORT || 5000;
mongoose.set("useFindAndModify", false);
mongoose
  .connect(process.env.MDB_CONNECT, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(`${err} did not connect`));
