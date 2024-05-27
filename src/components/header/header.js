import { useState } from "react";
import "../header/header.css";
import hamburger from "../../images/hamburger.png";
import close from "../../images/close.png";

function Header() {
    const [open, setOpen] = useState(false);

    const headers = [
        "Home",
        "Skills",
        "Experience",
        "Contact"
    ];

    return (
        <>
            {/* Header Desktop */ }
            <div className='header'>
                <span className='header-list'>
                    { headers.map((o) => (
                        < div > { o }</div>
                    )) }
                </span>
            </div>

            {/* Header Mobile */ }
            <div className='header-mobile'>
                <img
                    onClick={ () => { setOpen(!open) } }
                    className='header-image-burger'
                    src={ hamburger }
                    alt=""></img>

                <div className={ `header-menu${ open ? '-open' : '' }` }>
                    <div className="header-menu-container">
                        <img
                            onClick={ () => { setOpen(!open) } }
                            className="header-menu-image-close"
                            src={ close }></img>
                        <div className="header-menu-list">
                            { headers.map((o) => (
                                <a> { o }</a>
                            )) }
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Header;