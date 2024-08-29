import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Posts from "../features/Posts/Posts";
import Focus from "../features/Posts/FocusPost";

const App = () => {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="" element={<Posts focus={false}/>}/>
          <Route path="/:postId" element={<Focus/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
};

export default App;