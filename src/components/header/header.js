import { useState, useRef } from "react";
import "../header/header.css";
import hamburger from "../../images/hamburger.png";
import close from "../../images/close.png";

function Header({ informationRef, skillRef, experienceRef }) {
    const [open, setOpen] = useState(false);
    const headers = [
        "Home",
        "Skills",
        "Experience",
        "Contact"
    ];

    console.log("test", skillRef)

    const handleClick = (o) => {

        switch (o) {
            case "Home":
                console.log("informationRef", informationRef);
                informationRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "Skills":
                console.log("skillRef", skillRef);
                skillRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case "Experience":
                experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    };

    return (
        <>
            {/* Header Desktop */ }
            <div className='header'>
                <span className='header-list'>
                    { headers.map((o) => (
                        < div onClick={ () => { handleClick(o) } }> { o }</div>
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
                                <a onClick={ () => { handleClick(o) } }> { o }</a>
                            )) }
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Header;