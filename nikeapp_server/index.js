import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

//import route
import productRoutes from "./routes/product.js";

dotenv.config();
const app = express();

//
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//

app.use("/api/v1", productRoutes);

const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then((result) => {
    app.listen(PORT, () => {
      console.log("listening on port 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });
