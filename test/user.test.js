import request from "supertest";
import { describe, expect, test } from "vitest";
import app from "../index.js";

describe("User API", () => {
  test("should create a new user", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({ name: "Alyson Nascimento", email: "alyson@email.com" });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("name", "Alyson Nascimento");
    expect(response.body).toHaveProperty("email", "alyson@email.com");
  });

  test("should fail to create user without name or email", async () => {
    const response = await request(app).post("/api/users").send({ name: "" });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("message");
  });
});
