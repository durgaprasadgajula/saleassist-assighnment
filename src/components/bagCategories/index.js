import { Image } from "react-bootstrap";
import AllBags from "../images/Group 475.png";
import VanityPouch from "../images/Group 307.png";
import ToteBag from "../images/Group 300.png";
import DuffleBag from "../images/Group 301.png";
import LaptopSleeve from "../images/Group 302.png";
import MessengerBag from "../images/Group 303.png";
import SlingBag from "../images/Group 304.png";
import HandBag from "../images/Group 305.png";
import Buck from "../images/Group 306.png";

import "./index.css";

const BagsCategories = () => {
    return (
        <div className="main-container">
            <ul className="categories">
                <li className="li-item">
                    <Image src={AllBags} alt="search" />
                </li>
                <li className="li-item">
                    <Image src={VanityPouch} alt="VanityPouch" />
                </li>
                <li className="li-item">
                    <Image src={ToteBag} alt="ToteBag" />
                </li>
                <li className="li-item">
                    <Image src={DuffleBag} alt="DuffleBag" />
                </li>
                <li className="li-item">
                    <Image src={LaptopSleeve} alt="LaptopSleeve" />
                </li>
                <li className="li-item">
                    <Image src={MessengerBag} alt="MessengerBag" />
                </li>
                <li className="li-item">
                    <Image src={SlingBag} alt="SlingBag" />
                </li>
                <li className="li-item">
                    <Image src={HandBag} alt="HandBag" />
                </li>
                <li className="li-item">
                    <Image src={Buck} alt="Buck" />
                </li>
            </ul>
        </div>
    );
};

export default BagsCategories;
