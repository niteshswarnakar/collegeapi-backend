import express from "express"
import fileUpload from "express-fileupload"
import path from "path"
import fs from "fs"

const router = express.Router()



router.post("/add-book",fileUpload(), async (req,res) =>{
    const data = req.files
    console.log({data})


    let image = req.files;
    let uploadPath = path.join(process.cwd()+'/somewhere/server/');

  // Use the mv() method to place the file somewhere on your server
  console.log(typeof(image))

//   fs.writeFile(uploadPath, image, 'base64', (err) => {
//     if (err) throw err;
//     console.log('Image saved successfully!');
//   });

    res.send("add-book route reached")
})

export default router