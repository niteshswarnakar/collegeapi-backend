import express from "express"
import fileUpload from "express-fileupload"
import path from "path"
import fs from "fs"
import BookModel from "../models/bookpost.js"

const router = express.Router()



router.post("/add-book",fileUpload(), async (req,res) =>{
    const data = req.files
    console.log({data})


    let image = req.files;

  // Use the mv() method to place the file somewhere on your server
  console.log(" type of image - ", typeof(image))

  const newBookPost = new BookModel({
    name: data?.name, 
    fileData: data,
  });

  try{
    await newBookPost.save(); 

    res.status(201).json(newBookPost)
  }catch(err){
    console.log(err)
  }

  

    res.send("Unable to save the BOOK POST")
})

export default router