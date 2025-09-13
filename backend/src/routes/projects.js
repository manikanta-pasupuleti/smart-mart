import express from 'express';
import { Project } from '../models.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find().populate('members');
  res.json(projects);
});

// Create project
router.post('/', async (req, res) => {
  const { name, description, members } = req.body;
  const project = await Project.create({ name, description, members });
  res.status(201).json(project);
});

// Update project
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const project = await Project.findByIdAndUpdate(id, update, { new: true });
  res.json(project);
});

export default router;
