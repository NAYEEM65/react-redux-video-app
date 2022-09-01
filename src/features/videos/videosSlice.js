import { getVideos } from './videosAPI';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: '',
};

// async thunk
export const fetchVideos = createAsyncThunk(
    'videos/fetchVideos',
    async ({ tags, search, author }) => {
        const videos = await getVideos(tags, search, author);
        return videos;
    },
);

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
    // reducers: {
    //     likeCount: (state = initialState, action) => {
    //         const response = axios.put(`http://localhost:9000/videos/${action.payload}`);
    //         const video = response.json();
    //         console.log(video);
    //     },
    //     disLikeCount: (state, action) => {
    //         state.unlikes = state.unlikes + 1;
    //     },
    // },
});

export default videoSlice.reducer;
export const { likeCount, disLikeCount } = videoSlice.actions;
