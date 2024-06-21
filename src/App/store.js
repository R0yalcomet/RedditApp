import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../features/Posts/PostsSlice";
import searchReducer from "../features/Search/SearchSlice";

export default configureStore({
    reducer: combineReducers({
        posts: postsReducer,
        search: searchReducer
    }),
});