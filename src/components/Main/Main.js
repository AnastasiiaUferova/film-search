import React from "react";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio"
import './Main.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Main () {
    
    return (
        <div className="main">
            <Header />
            <Promo />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
        )
}

export default Main;