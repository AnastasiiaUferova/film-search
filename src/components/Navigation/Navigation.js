import React from "react";
import './Navigation.css'
import { NavLink } from "react-router-dom";


function Navigation () {
    return (
    <div className="navigation">
        <div className="navigation__container ">
            <NavLink to="/movies" className="navigation__item ">Movies</NavLink>
        </div>
    </div>
        )
}

export default Navigation;