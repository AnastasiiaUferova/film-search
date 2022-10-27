import React from "react";
import './NavTab.css';
import { HashLink} from 'react-router-hash-link';


function NavTab () {
    
    return (
        <div className="nav-tab">
            <HashLink smooth to="/#about-me" className="nav-tab__link">Learn about creator</HashLink>
        </div>
        )
}

export default NavTab;