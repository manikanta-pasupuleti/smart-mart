import express from 'express';
import { Comment } from '../models.js';

const router = express.Router();

// Create comment
router.post('/:taskId/comments', async (req, res) => {
  const { taskId } = req.params;
  const { userId, text } = req.body;
  const comment = await Comment.create({ taskId, userId, text });
  res.status(201).json(comment);
});

export default router;
