import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../features/Posts/PostsSlice";

export default configureStore({
    reducer: combineReducers({
        posts: postsReducer
    }),
});