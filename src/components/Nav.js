import { React, useState } from 'react'
import { ToggleIcon , ShoesIcon } from '../svgs/NavSvg.js';

export const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);


    window.onscroll = function () {
        var navbar = document.getElementById("navbar");
        if (window.pageYOffset > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    return (
        <nav id="navbar" className={isNavOpen ? 'nav-open sidebar centering-flex text-white sticky' : 'nav-closed sidebar centering-flex text-white sticky'}>
            <button onClick={() => setIsNavOpen(!isNavOpen)}>
                <ToggleIcon />
            </button>
            <ul>
                <li><a href="#About"><ShoesIcon/></a></li>
            </ul>
        </nav>
    )
}

export default Nav