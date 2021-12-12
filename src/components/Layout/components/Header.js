import React, {useState} from "react";
import "./styles.css";
import viberLogo from "../../../images/viber.svg";
import telegramLogo from "../../../images/telegram.svg";
import instagramLogo from "../../../images/instagram.svg";
import menuIcon from "../../../images/menu.svg";
import {NavLink, Link} from "react-router-dom";

const Header = () => {
    const [isMenuOpened, setOpened] = useState(false);
    return (
        <>
            <header className="header-container">
                <Link to="/" className="logo">
                    <h3 className="header-logo">REALiTY</h3>
                    <p>Агенство недвижимости</p>
                </Link>
                <div className="contacts">
                    <p className="header-contacts">+375291234567</p>
                    <div>
                        <img src={viberLogo} alt="viber" className="header-contacts-logo"/>
                        <img src={telegramLogo} alt="telegram" className="header-contacts-logo"/>
                        <img src={instagramLogo} alt="instagram" className="header-contacts-logo"/>
                    </div>
                </div>
                <nav className="nav">
                    <NavLink to="/" className="nav-link">ГЛАВНАЯ</NavLink>
                    <NavLink to="/objects" className="nav-link">ОБЪЕКТЫ</NavLink>
                    <NavLink to="/services" className="nav-link">УСЛУГИ</NavLink>
                    <NavLink to="/about_us" className="nav-link">О НАС</NavLink>
                    <NavLink to="/partners" className="nav-link">ПАРТНЕРЫ</NavLink>
                </nav>
                <img className="menu-icon" src={menuIcon} onClick={() => setOpened(true)}/>
            </header>
            <div className={isMenuOpened ? "mobile-menu slide-in" : "mobile-menu slide-out"}>
                <div className="close-wrapper">
                    <img className="close-menu" src={menuIcon} onClick={() => setOpened(false)}/>
                </div>
                <nav className="mobile-nav">
                    <NavLink to="/" className="nav-link" onClick={() => setOpened(false)}>ГЛАВНАЯ</NavLink>
                    <NavLink to="/objects" className="nav-link" onClick={() => setOpened(false)}>ОБЪЕКТЫ</NavLink>
                    <NavLink to="/services" className="nav-link" onClick={() => setOpened(false)}>УСЛУГИ</NavLink>
                    <NavLink to="/about_us" className="nav-link" onClick={() => setOpened(false)}>О НАС</NavLink>
                    <NavLink to="/partners" className="nav-link" onClick={() => setOpened(false)}>ПАРТНЕРЫ</NavLink>
                </nav>
            </div>
        </>
    );
}

export default Header;
