import mongoose from "mongoose";

const confessionSchema = new mongoose.Schema({
  from: {
    type: String,
    // required: true,
  },
  to: {
    type: String,
    // required: true,
  },
  message: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
  },
  comments: [{user: String, comment: String}],
});

const ConfessionModel = mongoose.model("ConfessionModel", confessionSchema);
export default ConfessionModel;
