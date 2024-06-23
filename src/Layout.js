// Layout.js
import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Header />
            <div className="container-fluid" style={{ marginTop: '60px' }}>
                <div className="row">
                    <div className="col">
                        <Outlet /> {/* Use Outlet to render child routes */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Layout;
