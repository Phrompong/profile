import "../footer/footer.css";
import button_download from '../../images/button_download.png';
import contact_tel from "../../images/contact_tel.png";
import contact_mail from "../../images/contact_mail.png";
import contact_line from "../../images/contact_line.png";
import contact_linkIn from "../../images/contact_linkin.png";

function Footer() {
    return <>
        <div className="footer" >
            <div className="footer-title">More about me?</div>
            <div className="footer-information">This is complete me, download my resume and find all about me.</div>
            <img className="footer-button" src={ button_download } ></img>

            <div className="footer-word-contact">or contact me</div>
            <div className="footer-contact">
                <img className="footer-contact-image" src={ contact_tel } ></img>
                <img className="footer-contact-image" src={ contact_mail } ></img>
                <img className="footer-contact-image" src={ contact_line } ></img>
                <img className="footer-contact-image" src={ contact_linkIn } ></img>
            </div>
        </div >
    </>
}

export default Footer;