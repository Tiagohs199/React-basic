import React from "react";
import NavBar from "./navBar";

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini"><b></b>M</span>
            <span className="logo-lg">
                <i className="fa fa-sitemap"></i>
                <b> MY</b> Money
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className="sidebar-toggle" data-toggle='offcanvas'></a>
            <NavBar />
        </nav>
    </header>
)