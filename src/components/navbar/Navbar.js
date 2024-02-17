import search from "../images/search.png";
import user from "../images/user-alt.png";
import frame from "../images/Frame 53.png";
import cart from "../images/Frame 54.png";

import "./Navbar.css";
import { Image } from "react-bootstrap";

const Navbar = () => {
    return (
        <div className="header">
            <nav className="d-flex flex-column nav-container pt-2">
                <div className="d-flex justify-content-between ">
                    <a href="/" className="navlogo font-family-serif">
                        TANN TRIM
                    </a>

                    <ul className="row nav-list">
                        <li className="col-3">
                            <Image src={search} alt="search" />
                        </li>
                        <li className="col-3">
                            <Image src={user} alt="user" />
                        </li>
                        <li className="col-3">
                            <Image src={frame} alt="frame" />
                        </li>
                        <li className="col-3">
                            <Image src={cart} alt="cart" />
                        </li>
                    </ul>
                </div>

                <div className="d-flex justify-content-center align-items-center text-white mt-4 ">
                    <ul className="d-flex justify-content-around">
                        <li className="nav-item">Bags</li>
                        <li className="nav-item">Travel</li>
                        <li className="nav-item">Accesories</li>
                        <li className="nav-item">Gifting</li>
                        <li className="nav-item">Jewelery</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
