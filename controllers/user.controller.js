import { users } from "../models/user.model.js";

export const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) 
    return res.status(400).json({ message: "Name and email are required." });

  const user = { id: users.length + 1, name, email };
  users.push(user);
  // Inserir no banco
  // const user = await userService.createUser({ name, email });
  res.status(201).json(user);
};

export const getUsers = (req, res) => {
  res.json(users);
};
