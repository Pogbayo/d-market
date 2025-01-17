import express, { Application } from "express"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import userRoutes from "./routes/userRoutes"; 
import productRoutes from "./routes/productRoutes"; 
import cors from "cors"; 

dotenv.config(); 

const app: Application = express(); 
const PORT = process.env.PORT || 5000;
app.use(cors());
 
app.use(express.json()); 

// console.log(process.env.MONGO_URL); 
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/api/users", userRoutes); 
app.use("/api/products", productRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
