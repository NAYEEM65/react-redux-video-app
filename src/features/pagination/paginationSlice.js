import { getVideoPagination } from './videosAPI';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
    paginateVideos: [],
    isLoading: false,
    isError: false,
    error: '',
};

// async thunk
export const fetchPaginateVideos = createAsyncThunk('videos/fetchPaginateVideos', async (limit) => {
    const paginateVideos = await getVideoPagination(limit);
    return paginateVideos;
});

const paginateVideoSlice = createSlice({
    name: 'paginateVideos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPaginateVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchPaginateVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.paginateVideos = action.payload;
            })
            .addCase(fetchPaginateVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.paginateVideos = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default paginateVideoSlice.reducer;
