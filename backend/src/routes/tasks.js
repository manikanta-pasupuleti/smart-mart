import express from 'express';
import { Task } from '../models.js';

const router = express.Router();

// Create task
router.post('/:boardId/tasks', async (req, res) => {
  const { boardId } = req.params;
  const data = req.body;
  const task = await Task.create({ ...data, boardId });
  res.status(201).json(task);
});

// Update task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const task = await Task.findByIdAndUpdate(id, update, { new: true });
  res.json(task);
});

// Get task
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.json(task);
});

// Delete task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ success: true });
});

export default router;
