import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjects = createAsyncThunk('projects/fetch', async () => {
  const res = await axios.get('/api/projects');
  return res.data;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProjects.rejected, (state) => { state.status = 'failed'; });
  },
});

export default projectsSlice.reducer;
