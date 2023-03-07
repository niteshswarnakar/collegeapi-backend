import express from "express";
// import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();
import { getUsers, getuser, adduser } from "../controller/users.js";
const users = [
  {
    prog: "BCT",
    batch: "075",
    group: "C",
    roll: "058",
    name: "nitesh swarnakar",
    id: "1",
  },
  {
    prog: "BCT",
    batch: "075",
    group: "C",
    roll: "058",
    name: "milan shrestha",
    id: "2",
  },
  {
    prog: "BCT",
    batch: "075",
    group: "C",
    roll: "058",
    name: "roshan subedi",
    id: "3",
  },
  {
    prog: "BCT",
    batch: "075",
    group: "C",
    roll: "058",
    name: "nischal shakya",
    id: "4",
  },
];

router.get("/", getUsers);

router.get("/:id", getuser);

router.post("/", adduser);

export default router;
