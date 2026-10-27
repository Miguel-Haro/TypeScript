import cors from "cors";
import express from "express";
import userRoutes from "./routes/users";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8800, () => {
  console.log("Servidor rodando em http://localhost:8800");
});