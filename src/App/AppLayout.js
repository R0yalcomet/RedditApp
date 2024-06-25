import React from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "../features/Search/Search";
import SubredditList from "../features/Search/SubRedditList";

const AppLayout = () => {
    return (
        <div>
            <header>
                <Link to={"/"}>
                    <h1>REDDIT-LITE</h1>
                </Link>
                <Search/>
                <SubredditList/>
            </header>
            <Outlet/>
        </div>
    )
};

export default AppLayout;