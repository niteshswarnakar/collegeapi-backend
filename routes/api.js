import express from "express";
import { saveRequest } from "../controller/api.js";
const router = express.Router();
import ConfessionModel from "../models/confession.js";
// * create data in mongodb database
//* read data from mongodb database
// app.get("/requestlist", getRequestedFormData);

// app.post("/add-confession", addConfession);

router.post("/students", saveRequest);

router.get("/get-confession", async (req, res) => {
  try {
    const confessionList = await ConfessionModel.find();
    res.status(200).json(confessionList);
  } catch (err) {
    res.send(err);
  }
});

router.post("/add-confession", async (req, res) => {
  console.log("req.body - ", req.body);
  const newConfession = new ConfessionModel({
    from: req.body.from,
    to: req.body.to,
    message: req.body.message,
  });

  try {
    await newConfession.save();
    res.status(201).json(newConfession);
  } catch (err) {
    console.log(err);
    res.send("error ayo ");
  }

  // res.send({ message: "you reached here" });
});

router.post("/demo-route", (req, res) => {
  console.log("req - ", req.body);
  res.send("you reached here");
});

router.delete("/delete-confessions", async (req, res) => {
  await ConfessionModel.deleteMany({});
  res.send("all deleted");
});

export default router;
