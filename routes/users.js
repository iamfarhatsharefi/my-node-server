const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET users by name
router.get("/search", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: "Name query parameter is required" });
  }
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  res.json(filteredUsers);
});

// POST new user
router.post("/", (req, res) => {
  const newUser = req.body;
  if (!newUser.name) {
    return res.status(400).json({ message: "User name is required" });
  }
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1; // Auto-increment ID
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  if (!updatedUser.name) {
    return res.status(400).json({ message: "User name is required" });
  }
  users = users.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user));
  res.json(updatedUser);
});

