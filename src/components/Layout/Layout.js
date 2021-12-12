import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import Objects from "../Objects/Objects";
import Services from "../Services/services";
import About from "../About/About";
import Partners from "../Partners/Partners";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/objects" element={<Objects/>}/>
                    <Route exact path="/services" element={<Services/>}/>
                    <Route exact path="/about_us" element={<About/>}/>
                    <Route exact path="/partners" element={<Partners/>}/>
                </Routes>
                <Form/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default Layout;
