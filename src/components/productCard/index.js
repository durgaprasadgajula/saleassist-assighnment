import bag from "../images/Group 451.png";
import badge from "../images/Bookmark.png";

import "./index.css";
import { Image } from "react-bootstrap";

const ProductCard = ({ product }) => {
    const { image_url, title, mrp, discounted_price, discount_percentage } =
        product;

    return (
        <li className="product-card">
            <div>
                <div className="badge">
                    <Image src={badge} alt="bookmark" />
                </div>
                <img width={260} alt="img" src={image_url} />
            </div>
            <div>
                <h5>{title}</h5>
            </div>
            <div className="d-flex justify-content-between ">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="span-text mr-2">₹{discounted_price}</span>
                    <span className="mrp">₹{mrp}</span>
                    <span className="text-info span-text">
                        ({discount_percentage}% off)
                    </span>
                </div>
                <div className="d-flex">
                    <Image className="" alt="bag" src={bag} />
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
