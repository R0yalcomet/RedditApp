import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://www.reddit.com/.json?';

export const loadFeed = createAsyncThunk(
    'posts/loadFeed',
    async() => {         
        const response = await fetch(url);
        if(!response.ok) {
            const error = await response.json()
            const message = `An error has occurred: ${response.status} ${error.message}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    }
);

export const loadPost = createAsyncThunk();

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        feedState: [],
        focusData: {},
        loadingFeed: false,
        fetchFeedFailed: false,
        loadingFocus: false,
        fetchFocusFailed: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadFeed.pending, (state) => {
                state.loadingFeed = true;
                state.fetchFeedFailed = false;
            })
            .addCase(loadFeed.fulfilled, (state, action) => {
                state.loadingFeed = false;
                state.fetchFeedFailed = false;
                state.feedState = action.payload.data.children;
            })
            .addCase(loadFeed.rejected, (state) => {
                state.loadingFeed = false;
                state.fetchFeedFailed = true;
            })
    }
});

export const selectAllPosts = (state) => state.posts.feedState;

export const isLoadingFeed = (state) => state.posts.loadFeed;

export default postsSlice.reducer;