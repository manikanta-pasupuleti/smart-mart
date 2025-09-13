import express from 'express';
import { Board } from '../models.js';

const router = express.Router();

// Create board
router.post('/:projectId/boards', async (req, res) => {
  const { projectId } = req.params;
  const { title, order } = req.body;
  const board = await Board.create({ projectId, title, order });
  res.status(201).json(board);
});

// Reorder board
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { order } = req.body;
  const board = await Board.findByIdAndUpdate(id, { order }, { new: true });
  res.json(board);
});

export default router;
