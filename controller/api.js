// import RequestModel from "../models/clientrequest.js";
import mongoose from "mongoose";
import axios from "axios";
import ConfessionModel from "../models/confession.js";

// * fetch data from collegeapi and send as response

export const addConfession = async (req, res) => {
  console.log("req.body - ", req.body);
  const newConfession = new ConfessionModel({
    from: req.body.from,
    to: req.body.to,
    message: req.body.message,
  });

  try {
    const savedConfession = await newConfession.save();
    res.status(200).json(savedConfession);
  } catch (err) {
    console.log(err);
    res.send("error ayo ");
  }

  res.send({ message: "you reached here" });
};
