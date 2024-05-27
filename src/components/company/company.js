import { useState, useEffect } from "react";
import "../company/company.css";
import logoCSI from "../../images/Logo_CSIGROUP.png";
import logoFusion from "../../images/fusionsol_logo.png";
import logoPtt from "../../images/logo_ptt.png";
import logoTN from "../../images/logo_TN.png";

function Company() {
    const transition = 0.5;
    const [scrollY, setScrollY] = useState(1000);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY === 0 ? 1000 : 0;

            setScrollY(value);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>
        <div className="company" >
            <img
                src={ logoCSI } className="company-image"
                style={ {
                    transform: `translateY(${ scrollY }px)`,
                    transition: `${ 1 }s`
                } }></img>
            <div className="company-vertical-line"></div>

            <img src={ logoFusion }
                style={ {
                    transform: `translateY(${ scrollY }px)`,
                    transition: `${ 1.2 }s`
                } }
                className="company-image"></img>
            <div className="company-vertical-line"></div>

            <img src={ logoPtt }
                style={ {
                    transform: `translateY(${ scrollY }px)`,
                    transition: `${ 1.4 }s`
                } }
                className="company-image"></img>
            <div className="company-vertical-line"></div>

            <img src={ logoTN }
                style={ {
                    transform: `translateY(${ scrollY }px)`,
                    transition: `${ 1.6 }s`
                } }
                className="company-image"></img>
        </div >
    </>
}

export default Company;