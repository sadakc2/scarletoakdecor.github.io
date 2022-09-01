import express, { Router, json } from "express";
const router = Router();
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running..."));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "scarletoakdecor@gmail.com",
      pass: "csskrg0731!"
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });