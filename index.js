import "dotenv/config";
import express from "express";
import notificationRoutes from "./routes/notification.routes.js";
import userRoutes from "./routes/user.routes.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/notification", notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
