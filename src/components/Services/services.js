import React from "react";
import services from "../../images/services_img.png";
import "./styles.css";
import buySvg from "../../images/buying_negate.svg";
import sellSvg from "../../images/buy-home.svg";
import assessmentSvg from "../../images/buy-home_1.svg";
import signature from "../../images/signage_negate.svg";

const cardsData = [
    {img: buySvg, text: "Покупка объектов"},
    {img: sellSvg, text: "Продажа объектов"},
    {img: assessmentSvg, text: "Оценка недвижимости"},
    {img: signature, text: "Снятие обременений"},
];

const Services = () => {
    return (
        <div className="page-wrapper">
            <h1 className="page-title">Наши услуги</h1>
            <div className="flex text-container">
                <div>
                    <h4 className="subtitle">Ваши цели - наша забота!</h4>
                    <p className="text text-desktop">REALiTY - современное агенство недвижимости. Наша компания - это сочетание инноваций,
                        ответственного подхода и человеческого отношения к каждому клиенту.</p>
                </div>
                <div className="image-wrapper">
                    <img src={services} className="img"/>
                    <div className="image-border"/>
                </div>
            </div>
            <p className="text text-mobile">REALiTY - современное агенство недвижимости. Наша компания - это сочетание инноваций,
                ответственного подхода и человеческого отношения к каждому клиенту.</p>
            <h5 className="cards-title">Мы предлагаем широкий спектр услуг по самым приемлемым ценам в городе.</h5>
            <div className="flex cards-wrapper">
                {cardsData.map(({img, text}) => (
                    <div className="card flex">
                        <img src={img} className="card-icon"/>
                        <p className="card-text">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
