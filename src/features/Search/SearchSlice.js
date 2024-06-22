import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubreddits = createAsyncThunk(
    'search/loadSubreddits',
    async () => {
        const url = 'https://www.reddit.com/subreddits/.json?limit=10';
        const response = await fetch(url);
        if (!response.ok) {
            const error = await response.json();
            const message = `An error has occurred: ${response.status} ${error.message}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        subredditList: [],
        viewSubreddit: '',
        loadingSubreddits: false,
        fetchSubredditsFailed: false,
    },
    reducers: {
        setSubreddit(state, action) {
            state.viewSubreddit = action.payload;
        },
        clearSubreddit(state) {
            state.viewSubreddit = '';
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
                let list = [];
                action.payload.data.children.forEach(sub => {
                    const subName = sub.data.display_name_prefixed;
                    if (!list.includes(subName)) {
                        list.push(subName);
                    };
                });
                state.subredditList = list;
            })
            .addCase(loadSubreddits.rejected, (state) => {
                state.loadingSubreddits = false;
                state.fetchSubredditsFailed = true;
            })
    }
});

export const selectSubreddits = (state) => state.search.subredditList;
export const subreddit = (state) => state.search.viewSubreddit;
export const loadingSubreddits = (state) => state.search.loadSubreddits;

export default searchSlice.reducer;