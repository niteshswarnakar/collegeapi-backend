import express from "express";
import { saveRequest } from "../controller/api.js";
import ConfessionModel from "../models/confession.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/students", saveRequest);

router.get("/get-confession", async (req, res) => {
  try {
    // const confessionList = await ConfessionModel.find();
    let confessionList = [] 
    res.status(200).json(confessionList);
  } catch (err) {
    res.send(err);
  }
})


router.post("/admin", async (req, res) => {
  const {secret_key} = req.body
  console.log({secret_key})
  try {
    if (secret_key !== "random45#"){
      res.status(400).send("Invalid secret")
    }
    const confessionList = await ConfessionModel.find();
    res.status(200).json(confessionList);
  } catch (err) {
    res.send(err);
  }
})


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

router.post("/add-comment/:id", async (req, res) => {
  const { id: _id } = req.params;
  console.log({ _id });
  const { comment } = req.body;
  console.log({ comment });
  const confession = await ConfessionModel.findById(_id);
  console.log({ confession });
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No confession with that id");

  // this is old method of updating
  // const updatedConfession = await ConfessionModel.findByIdAndUpdate(_id, {
  //   ...confession,
  //   comments: [...confession.comments, comment],
  // });

  // this is new method of updating

  


  try { 
    confession?.comments.push(comment);
    console.log({ confession });
    await confession.save();
    res.json(confession);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete-confessions", async (req, res) => {
  await ConfessionModel.deleteMany({});
  res.send("all deleted");
});

export default router
