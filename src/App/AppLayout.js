import React from "react";
import { Outlet } from "react-router-dom";
//import Search from "../features/Search/Search"

const AppLayout = () => {
    return (
        <div>
            <header>
                <h1>REDDIT-MINI</h1>
                {/* <Search/> */}
            </header>
            <Outlet/>
        </div>
    )
};

export default AppLayout;