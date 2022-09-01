const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: '',
};

// async thunk

const videoSlice = createSlice({
    name: 'pagination',
    initialState,
});

export default videoSlice.reducer;
