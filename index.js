import "dotenv/config";
import express from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import notificationRoutes from "./routes/notification.routes.js";
import userRoutes from "./routes/user.routes.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/notification", notificationRoutes);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hackteen Example API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
