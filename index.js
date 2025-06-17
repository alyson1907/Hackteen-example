import express from "express";
import userRoutes from "./routes/user.routes.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
