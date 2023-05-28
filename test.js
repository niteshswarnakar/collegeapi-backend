
const imageData = req.body.imageData; // assume this contains the base64-encoded image data
const filePath = 'images/myimage.png'; // path to the file you want to create

fs.writeFile(filePath, imageData, 'base64', (err) => {
  if (err) throw err;
  console.log('Image saved successfully!');
});
