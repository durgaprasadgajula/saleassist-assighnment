import React, { useState, useEffect } from "react";
import "./index.css";
import vector from "../images/Vector 4.png";
import { Image } from "react-bootstrap";
import ProductCard from "../productCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await fetch(
                "http://localhost:3001/products", // Make sure this URL is correct
                options
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);

            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between text-white p-5">
                <div className="header">Bags . Backpacks</div>
                <div className="header">
                    <span>{products.length} products</span>
                    <Image src={vector} alt="vector" />
                </div>
            </div>
            <ul className="product-container">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default Products;
