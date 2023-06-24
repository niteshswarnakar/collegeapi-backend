import mongoose from "mongoose"

const bookPostSchema = new mongoose.Schema({
    name: String, 
    fileData: Buffer,
})

const BookModel = mongoose.model('BookModel',bookPostSchema);

export default BookModel