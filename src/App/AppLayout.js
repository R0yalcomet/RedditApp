import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../features/Search/Search"

const AppLayout = () => {
    return (
        <div>
            <header>
                <h1>REDDIT-LITE</h1>
                <Search/>
            </header>
            <Outlet/>
        </div>
    )
};

export default AppLayout;