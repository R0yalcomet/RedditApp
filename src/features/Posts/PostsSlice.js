import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://www.reddit.com/';

export const loadFeed = createAsyncThunk(
    'posts/loadFeed',
    async () => {         
        const response = await fetch(url + '.json');
        if (!response.ok) {
            const error = await response.json()
            const message = `An error has occurred: ${response.status} ${error.message}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    }
);

export const loadPost = createAsyncThunk(
    'posts/loadPost',
    async (postLink) => {
        const response = await fetch(url + postLink + '.json');
        if (!response.ok) {
            const error = await response.json()
            const message = `An error has occurred: ${response.status} ${error.message}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        feedState: [],
        focusState: {},
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
                state.feedState = action.payload.data.children; //an array of posts
            })
            .addCase(loadFeed.rejected, (state) => {
                state.loadingFeed = false;
                state.fetchFeedFailed = true;
            })
            .addCase(loadPost.pending, (state) => {
                state.loadingFocus = true;
                state.fetchFocusFailed = false;
            })
            .addCase(loadPost.fulfilled, (state, action) => {
                state.loadingFocus = false;
                state.fetchFocusFailed = false;
                state.focusState = action.payload; //payload contains both the post and its comments
            })
    }
});

export const selectAllPosts = (state) => state.posts.feedState;
export const isLoadingFeed = (state) => state.posts.loadingFeed;

export const selectFocus = (state) => state.posts.focusState;
export const isLoadingPost = (state) => state.posts.loadingFocus;

export default postsSlice.reducer;