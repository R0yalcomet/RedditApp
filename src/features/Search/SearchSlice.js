import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubreddits = createAsyncThunk(
    'search/loadSubreddits',
    async () => {}
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        subredditList: [],
        searchSubreddit: '',
        loadingSubreddits: false,
        fetchSubredditsFailed: false,
    },
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        clearSearchTerm(state) {
            state.searchTerm = '';
        },
        setSubreddit(state, action) {
            state.searchSubreddit = action.payload;
        },
        clearSubreddit(state) {
            state.searchSubreddit = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state) => {
                state.loadingSubreddits = true;
                state.fetchSubredditsFailed = false;
            })
            .addCase(loadSubreddits.fulfilled, (state, action) => {
                state.loadingSubreddits = false;
                state.fetchSubredditsFailed = false;
                state.subredditList = action.payload;
            })
            .addCase(loadSubreddits.rejected, (state) => {
                state.loadingSubreddits = false;
                state.fetchSubredditsFailed = true;
            })
    }
});

export const selectSubreddits = (state) => state.search.subredditList;
export const subreddit = (state) => state.search.searchSubreddit;
export const searchTerm = (state) => state.search.searchTerm;

export default searchSlice.reducer;