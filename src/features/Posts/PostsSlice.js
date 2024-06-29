import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import assembleUrl from "../../API/reddit";

export const loadFeed = createAsyncThunk( //load list of posts
    'posts/loadFeed',
    async (search, store) => {        
        const subName = store.getState().posts.filterSubreddit; //grab subreddit filter from state
        const searchParams = { //store search term and subreddit in object to pass onto assembleUrl function
            searchTerm: search,
            subName: subName
        };
        const url = assembleUrl(searchParams); 

        const response = await fetch(url);
        if (!response.ok) {
            const error = await response.json()
            const message = `An error has occurred: ${response.status} ${error.message}`;
            throw new Error(message);
        };
        const data = await response.json();
        return data;
    }
);

export const loadPost = createAsyncThunk( //load a single post in focus view
    'posts/loadPost',
    async (postLink) => {
        const url = 'https://www.reddit.com/';

        const response = await fetch(url + postLink + '.json');
        if (!response.ok) {
            const error = await response.json()
            const message = `An error has occurred: ${response.status} ${error.message}`;
            throw new Error(message);
        };
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
        fetchFocusFailed: false,
        filterSubreddit: '' 
    },
    reducers: {
        setFilterSubreddit: (state, action) => {
            state.filterSubreddit = action.payload;
        },
        clearSubredditFilter: (state) => {
            state.filterSubreddit = '';
        }
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
            .addCase(loadPost.rejected, (state) => {
                state.loadingFocus = false;
                state.fetchFocusFailed = true;
            })
    }
});

export const selectAllPosts = (state) => state.posts.feedState;
export const isLoadingFeed = (state) => state.posts.loadingFeed;

export const selectFocus = (state) => state.posts.focusState;
export const isLoadingPost = (state) => state.posts.loadingFocus;

export const subredditFilter = (state) => state.posts.filterSubreddit;
export const { setFilterSubreddit, clearSubredditFilter } = postsSlice.actions

export default postsSlice.reducer;