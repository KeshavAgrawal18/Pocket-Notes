import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello wold");
});

app.listen(PORT, (req, res) => {
  console.log(`Server started at port ${PORT}`);
});
