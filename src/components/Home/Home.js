import React from "react";
import mainImage from "../../images/home_main.png";
import "./styles.css";
import {Link} from "react-router-dom";
import firstImage from "../../images/home_1.png";
import secondImage from "../../images/home_2.png";
import thirdImage from "../../images/home_3.png";

const data = [
    {title: "100%", text: "безопасность сделки", image: firstImage, textPosition: "bottom"},
    {title: "24/7", text: "на связи с клиентами", image: secondImage, textPosition: "top"},
    {title: "2000+", text: "проданных объектов", image: thirdImage, textPosition: "bottom"}
];

const Home = () => {
    return (
        <div>
            <div className="flex wrapper">
                <div className="main-container">
                    <h2 className="home-title">недвижимость из надежных рук</h2>
                    <p className="home-text">
                        <p className="home-quote">Бесплатная консультация по покупке и продаже офисов, квартир и
                            коммерческой недвижимости. Ответственный и индивидуальный подход нашей компании поможет Вам найти
                            лучшее предожение.</p>


                    </p>
                    <Link to="/objects">
                        <button className="home-btn">Перейти в каталог объектов</button>
                    </Link>
                </div>
                <img src={mainImage} className="main-image"/>
            </div>
            <div className="data-wrapper">
                <h4 className="info-title">Мы поможем Вам достигнуть своей цели {window.innerWidth > 768 && <br/>} с
                    минимальными затратами!</h4>
                <div className="flex info-container">
                    {data.map(({title, text, image, textPosition}) => (
                        <div className={textPosition === "top" ? "info-wrapper flex info-top" : "info-wrapper flex"}>
                            <img src={image} className="data-image"/>
                            <div className="info-text-container">
                                <h5 className="info-text-title">{title}</h5>
                                <p className="info-text">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
