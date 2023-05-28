import express from "express";
import userRoutes from "./routes/users.js";
import apiRoutes from "./routes/api.js";
import bookRoutes from "./routes/book.js"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/book.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server running on port : ", PORT);
});

console.log(process.env.DB_CONNECT);

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db");
  }
);

app.get("/", (req, res) => {
  const routes = ["GET /", "GET /api/students", "GET /user:id"];
  res.status(200).json({ routes: routes });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.use("/api", apiRoutes);
<<<<<<< HEAD

app.use("/book", bookRoutes);

=======
app.use("/api",bookRoutes)
>>>>>>> Hotfix: Made router export
app.use("/users", userRoutes);
