import React from "react";

import Header from "../common/templates/header";
import Sidebar from "../common/templates/sidebar";
import Footer from "../common/templates/footer";
import Message from "../common/msg/message";

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer />
        <Message />
    </div>
)