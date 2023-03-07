// import RequestModel from "../models/clientrequest.js";
import mongoose from "mongoose";
import axios from "axios";

// * fetch data from collegeapi and send as response
export const saveRequest = async (req, res) => {
  let newData = [];

  console.log("req.body is - ", req.body);
  const formData = new URLSearchParams();
  formData.append("prog", req.body.prog);
  formData.append("batch", req.body.batch);
  formData.append("group", req.body.group);
  try {
    let response = await axios.post(
      "http://assmnt.pcampus.edu.np/api/students/",
      formData,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let data = response.data;

    data.forEach((student) => {
      let firstName = student[3].split(" ")[0];
      let email = `${student[0]}${student[1].toLowerCase()}${
        student[2]
      }.${firstName.toLowerCase()}@pcampus.edu.np`;
      student.push(email);
      newData.push(student);
    });
    console.log("response checking -- ", newData);

    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

// export const getRequestedFormData = async (req, res) => {
//   let requestlist = await RequestModel.find();
//   console.log("resquest list - ", requestlist);
//   res.send(requestlist);
// };
