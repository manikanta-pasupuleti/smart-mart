// MongoDB models for User, Project, Board, Task, Comment, ActivityLog

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  avatar: String
});

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  boards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }],
  createdAt: { type: Date, default: Date.now }
});

const BoardSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  title: String,
  order: Number
});

const TaskSchema = new mongoose.Schema({
  boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  title: String,
  description: String,
  assignees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  labels: [String],
  dueDate: Date,
  attachments: [{ url: String, name: String }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  position: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

const CommentSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const ActivityLogSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  actorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: String,
  meta: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', UserSchema);
export const Project = mongoose.model('Project', ProjectSchema);
export const Board = mongoose.model('Board', BoardSchema);
export const Task = mongoose.model('Task', TaskSchema);
export const Comment = mongoose.model('Comment', CommentSchema);
export const ActivityLog = mongoose.model('ActivityLog', ActivityLogSchema);
