import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import JobRoutes from "./routes/job-routes.js";
import CompanyRoutes from "./routes/company-routes.js";
import UserRoutes from "./routes/user-routes.js";
import Categorytes from "./routes/category-routes.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/categories", Categorytes);
app.use("/api/jobs", JobRoutes);
app.use("/api/companies", CompanyRoutes);
app.use("/api/users", UserRoutes);

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With,Content-Type, Accept, Authorization "
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
//   next();
// });

const CONECTION_URL =
  "mongodb+srv://newuser:12345@cluster0.ksqz1.mongodb.net/joblisting?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(`${err} did not connect`));

mongoose.set("useFindAndModify", false); //make sure that don't get any warnings in console
