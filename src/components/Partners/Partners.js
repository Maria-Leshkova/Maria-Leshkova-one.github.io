import React from "react";
import "./styles.css";
import lamoda from "../../images/lamoda.png";
import wargaming from "../../images/wargaming.png";
import prostore from "../../images/prostore.png";
import mila from "../../images/mila.png";
import a1 from "../../images/a1.png";
import evroopt from "../../images/evroopt.png";
import adrenalin from "../../images/adrenalin.png";
import kfc from "../../images/kfc.png";
import avatar_1 from "../../images/avatar_1.png";
import avatar_2 from "../../images/avatar_2.png";
import avatar_3 from "../../images/avatar_3.png";
import star from "../../images/star.svg";

const reviewData = [
    {
        img: avatar_1,
        text: "Продавала 2 объекта недвижимости дистанционно. Обе сделки прошли без каких-либо проблем, " +
            "очень оперативно, и были учтены все пожелания.",
        name: "Павлова Татьяна",
        title: "Директор компании “Firest”"
    },
    {
        img: avatar_2,
        text: "Заключила очень выгодную сделку для сдачи помещения в аренду. " +
            "Все было сделано за максимально краткие сроки. Спасибо!",
        name: "Мария Лешкевич",
        title: "Владелица танцевальной студии “Шаг”"
    },
    {
        img: avatar_3,
        text: "Я не первый раз сотрудничаю с агентствами, но именно в REALiTY виден профессиональный подход к клиентам " +
            "с контролем на всех этапах сделки.",
        name: "Светлана Липская",
        title: "Руководитель отдела продаж “Белторг”"
    }
]

const Partners = () => {
    return (
        <div className="page-wrapper">
            <h1 className="page-title">наши партнеры</h1>
            <div className="flex images-wrapper">
                {[lamoda, wargaming, prostore, mila, a1, evroopt, adrenalin, kfc].map(i => (
                    <div className="img-container flex">
                        <img src={i} className="partner-img"/>
                    </div>
                ))}
            </div>
            <h1 className="page-title">отзывы о нас</h1>
            <div className="reviews-container">
                <div className="line"/>
                <div className="flex reviews-wrapper">
                    {reviewData.map(({img, text, name, title}) => (
                        <div className="review flex">
                            <div>
                                <div className="flex">
                                    {[0, 1, 2, 3, 4].map(i => <img src={star}/>)}
                                </div>
                                <p className="text">{text}</p>
                            </div>
                            <div className="flex">
                                <img src={img}/>
                                <div className="name-wrapper">
                                    <h4>{name}</h4>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="reviews-link">Вы можете ознакомиться с остальными отзывами на сайте: https://otzyvy.by/</p>
            </div>
        </div>
    );
}

export default Partners;
