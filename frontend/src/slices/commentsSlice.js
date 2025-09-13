import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk('comments/fetch', async (taskId) => {
  const res = await axios.get(`/api/tasks/${taskId}/comments`);
  return res.data;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchComments.rejected, (state) => { state.status = 'failed'; });
  },
});

export default commentsSlice.reducer;
