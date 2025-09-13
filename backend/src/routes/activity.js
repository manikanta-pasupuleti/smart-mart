import express from 'express';
import { ActivityLog } from '../models.js';

const router = express.Router();

// Get activity log for a project
router.get('/:projectId/activity', async (req, res) => {
  const { projectId } = req.params;
  const logs = await ActivityLog.find({ projectId });
  res.json(logs);
});

export default router;
