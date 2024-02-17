import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import BagsCategories from "./components/bagCategories";
import Products from "./components/products";

function App() {
    return (
        <div
            style={{
                backgroundColor: "black",
                minHeight: "100vh",
                backgroundSize: "cover",
            }}
        >
            <Navbar />
            <BagsCategories />
            <Products />
        </div>
    );
}

export default App;
