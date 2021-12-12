import React from "react";
import "./styles.css";
import viberLogo from "../../../images/viber_blue.svg";
import telegramLogo from "../../../images/telegram_blue.svg";
import instagramLogo from "../../../images/instagram_blue.svg";
import locationIcon from "../../../images/location.svg";
import clockIcon from "../../../images/clock.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <div className="footer-about">
                    <img src={locationIcon} alt="location" className="about-icon"/>
                    <div className="address">
                        <p>ул.Одоевского 5, оф.3, </p>
                        <p>ст.м.Спортивная</p>
                    </div>
                </div>
                <div className="footer-about">
                    <img src={clockIcon} alt="clock" className="about-icon"/>
                    <p>Время работы:
                        9:00 - 21:00</p>
                </div>
            </div>
            <div>
                <div className="contacts-wrapper">
                    <p className="footer-contacts">+375297529688 </p>
                    {window.innerWidth < 769 && <p className="separator"> | </p>}
                    <p> reality@gmail.com</p>
                </div>
                {window.innerWidth > 768 && (
                    <div className="contacts-icons">
                        <img src={viberLogo} alt="viber" className="header-contacts-logo"/>
                        <img src={telegramLogo} alt="telegram" className="header-contacts-logo"/>
                        <img src={instagramLogo} alt="instagram" className="header-contacts-logo"/>
                    </div>
                )}
            </div>
            <div className="license-container">
                <p>ООО "REALiTY"</p>
                {window.innerWidth < 769 && <p className="separator"> | </p>}
                <p>УНП <span className="year">193208343 </span></p>
                {window.innerWidth < 769 && <p className="separator"> | </p>}
                <p>Лицензия № <span className="year">02240/375</span></p>
            </div>
            <div className="logo-wrapper">
                {window.innerWidth < 769 && (
                    <div className="contacts-icons">
                        <img src={viberLogo} alt="viber" className="header-contacts-logo"/>
                        <img src={telegramLogo} alt="telegram" className="header-contacts-logo"/>
                        <img src={instagramLogo} alt="instagram" className="header-contacts-logo"/>
                    </div>
                )}
                <div className="footer-logo-wrapper">
                    <h3 className="header-logo footer-logo">REALiTY</h3>
                    © <span className="year">2021</span> ООО “REALiTY”
                </div>
            </div>
        </footer>
    );
}

export default Footer;
