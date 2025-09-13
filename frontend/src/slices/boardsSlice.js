import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBoards = createAsyncThunk('boards/fetch', async (projectId) => {
  const res = await axios.get(`/api/projects/${projectId}/boards`);
  return res.data;
});

const boardsSlice = createSlice({
  name: 'boards',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoards.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchBoards.rejected, (state) => { state.status = 'failed'; });
  },
});

export default boardsSlice.reducer;
