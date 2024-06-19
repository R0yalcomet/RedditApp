import React from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "../features/Search/Search"

const AppLayout = () => {
    return (
        <div>
            <header>
                <Link to={"/"}>
                    <h1>REDDIT-LITE</h1>
                </Link>
                <Search/>
            </header>
            <Outlet/>
        </div>
    )
};

export default AppLayout;