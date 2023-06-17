import express from "express"
import fileUpload from "express-fileupload"
import path from "path"
import fs from "fs"

const router = express.Router()



router.post("/add-book",fileUpload(), async (req,res) =>{
    const data = req.files
    console.log(data.file)

  // Use the mv() method to place the file somewhere on your server
  // console.log(typeof({image}))

  // fs.writeFile(uploadPath, image, 'base64', (err) => {
  //   if (err) throw err;
  //   console.log('Image saved successfully!');
  // });
    console.log("add book route reached")
    res.json(data)
})

router.get("/add-book", async(req, res) =>{
  res.json("add book get route reached")
})
 
export default router