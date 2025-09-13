import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk('tasks/fetch', async (boardId) => {
  const res = await axios.get(`/api/boards/${boardId}/tasks`);
  return res.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchTasks.rejected, (state) => { state.status = 'failed'; });
  },
});

export default tasksSlice.reducer;
