import { React, useState } from 'react'
import { ToggleIcon, ShoesIcon, WeightsIcon, HomeIcon, SingInIcon, LogoIcon } from './svgs/NavSvg.js';

export const Nav = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(props.isNavOpen);

    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
        props.onToggle(!isNavOpen);
    }

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
            {isNavOpen && (
                <button className={isNavOpen ? 'nav-open-button' : 'nav-closed-button'} onClick={handleToggle}>
                    <LogoIcon />
                    <ToggleIcon />
                </button>
            )}
            {!isNavOpen && (
                <button className={isNavOpen ? 'nav-open-button' : 'nav-closed-button'} onClick={handleToggle}>
                    <ToggleIcon />
                </button>
            )}

            {isNavOpen && (
                <ul>
                    <li><a href="#Home"><HomeIcon /><span>Demonstaration Website HomePage</span></a></li>
                    <li><a href="/inprogress"><SingInIcon /><span>Demonstaration Website HomePage</span></a></li>
                    <li><a href="/inprogress"><ShoesIcon /><span>Demonstaration Website HomePage</span></a></li>
                    <li><a href="/inprogress"><WeightsIcon /><span>Demonstaration Website HomePage</span></a></li>
                    <li><a href="/inprogress"><HomeIcon /><span>Demonstaration Website HomePage</span></a></li>
                    <li><a href="/inprogress"><HomeIcon /><span>Demonstaration Website HomePage</span></a></li>
                    <li><a href="/inprogress"><HomeIcon /><span>Demonstaration Website HomePage</span></a></li>
                </ul>
            )}
            {!isNavOpen && (
                <ul>
                    <li><a href="/"><HomeIcon /></a></li>
                    <li><a href="/signin"><SingInIcon /></a></li>
                </ul>
            )}
        </nav>
    )
}

export default Nav