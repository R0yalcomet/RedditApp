import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Posts from "../features/Posts/Posts";
import Focus from "../features/Posts/FocusPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="" element={<Posts focus={false}/>}/>
          <Route path="/:postId" element={<Focus/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;