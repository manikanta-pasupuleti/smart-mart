import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());

app.use(express.json());

import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import boardRoutes from './routes/boards.js';
import taskRoutes from './routes/tasks.js';
import commentRoutes from './routes/comments.js';
import activityRoutes from './routes/activity.js';

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to Smart Mart Art Project Management API');
});
app.use('/api/projects', boardRoutes);
app.use('/api/boards', taskRoutes);
app.use('/api/tasks', commentRoutes);
app.use('/api/projects', activityRoutes);

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/smartmartart');

io.on('connection', (socket) => {
  // Example: join project room
  socket.on('joinProject', (projectId) => {
    socket.join(`project:${projectId}`);
    io.to(`project:${projectId}`).emit('user:online', { userId: socket.id });
  });

  socket.on('leaveProject', (projectId) => {
    socket.leave(`project:${projectId}`);
    io.to(`project:${projectId}`).emit('user:offline', { userId: socket.id });
  });

  // Real-time task and comment events
  socket.on('task:create', (data) => {
    io.to(`project:${data.projectId}`).emit('task:created', data);
  });
  socket.on('task:update', (data) => {
    io.to(`project:${data.projectId}`).emit('task:updated', data);
  });
  socket.on('task:move', (data) => {
    io.to(`project:${data.projectId}`).emit('task:moved', data);
  });
  socket.on('comment:create', (data) => {
    io.to(`project:${data.projectId}`).emit('comment:created', data);
  });

  socket.on('disconnect', () => {
    // Handle user disconnect logic
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
