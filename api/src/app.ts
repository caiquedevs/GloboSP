import * as dotenv from "dotenv";
import express from "express";
import routes from "./routes";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.u1ash.mongodb.net/${process.env.BD}?retryWrites=true&w=majority`
);

const app = express();
dotenv.config();

app.use(express.static("public"));

app.use(
  "/images",
  express.static(path.join(__dirname, "..", "public", "uploads", "posts"))
);

app.use(cors({ origin: "*" }));
routes(app);

app.get("/", (req, res) => {
  res.json("GloboSP API");
});

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log("-----------------------------------------------------");
  console.log(` Servidor ativo com sucesso em: http://localhost:${port}`);
  console.log("-----------------------------------------------------");
});
