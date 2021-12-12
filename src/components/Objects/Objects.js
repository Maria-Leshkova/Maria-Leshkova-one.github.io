import React, {useState} from "react";
import "./styles.css";
import mapIcon from "../../images/map-icon.svg";
import {data} from "./data";

const Objects = () => {
    const [activeTab, setActiveTab] = useState("apartment");

    return (
        <div className="page-wrapper">
            <h1 className="page-title">Каталог объектов</h1>
            <div className="flex">
                <div className="flex tabs-wrapper">
                    <div className="flex tabs">
                        <h5 className={activeTab==="apartment" ? "tab active-tab" : "tab"} onClick={() => setActiveTab("apartment")}>
                            Квартира
                        </h5>
                        <span>|</span>
                        <h5 className={activeTab==="office" ? "tab active-tab" : "tab"} onClick={() => setActiveTab("office")}>
                            Офис
                        </h5>
                        <span>|</span>
                        <h5 className={activeTab==="commerce" ? "tab active-tab" : "tab"} onClick={() => setActiveTab("commerce")}>
                            Коммерческая
                        </h5>
                    </div>
                    <div className="flex location">
                        <img src={mapIcon}/>
                        <p className="location-name">г.Минск</p>
                    </div>
                </div>
            </div>
            <div className="flex objects-wrapper">
                {data[activeTab].map(({img, price_byn, price_usd, address, area}) => (
                    <div className="object">
                        <img src={img}/>
                        <div className="relative">
                            <div className="price">
                                <p>{price_byn}</p>
                                <p>{price_usd}</p>
                            </div>
                            <div className="address-wrapper">
                                <h4>{address}</h4>
                                <p>Площадь: {area} м<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Objects;
