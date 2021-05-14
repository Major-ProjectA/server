import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import UserRoutes from "./routes/user-routes.js";
import CategoryRoutes from "./routes/category-routes.js";
import JobRoutes from "./routes/job-routes.js";
import CVRoutes from "./routes/cv-routes.js"

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With,Content-Type, Accept, Authorization "
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
//   next();
// });

app.use("/api/categories", CategoryRoutes);
app.use("/api/jobs", JobRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/cvs", CVRoutes);

// const CONECTION_URL =
//   "mongodb+srv://newuser:12345@cluster0.ksqz1.mongodb.net/joblisting?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MDB_CONNECT1, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(`${err} did not connect`));

mongoose.set("useFindAndModify", false); //make sure that don't get any warnings in console
