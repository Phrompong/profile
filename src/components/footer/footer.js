import "../footer/footer.css";
import button_download from '../../images/button_download.png';
import contact_tel from "../../images/contact_tel.png";
import contact_mail from "../../images/contact_mail.png";
import contact_line from "../../images/contact_line.png";
import contact_linkIn from "../../images/contact_linkin.png";
import logo_download from "../../images/logo_download.png";

function Footer({ contactRef }) {

    const handleDownloadFile = async () => {
        fetch("Phrompong.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);

                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Phrompong.pdf";
                alink.click();
            });
        });
    }
    return <>
        <div ref={ contactRef } className="footer" >
            <div className="footer-title">More about me?</div>
            <div className="footer-information">This is complete me, download my resume and find all about me.</div>
            <button className="footer-button" onClick={ handleDownloadFile }>
                <span className="footer-button-text"> Download Resume</span>
                <img src={ logo_download } className="footer-button-image"></img>
            </button>

            {/* <img className="footer-button" src={ button_download } ></img> */ }

            <div className="footer-word-contact">or contact me</div>
            <div className="footer-contact">
                <a href="tel:0952535792">
                    <img src={ contact_tel } alt="tel" className="footer-contact-image" />
                </a>
                <a href="mailto:someone@example.com">
                    <img src={ contact_mail } alt="mail" className="footer-contact-image" />
                </a>
                <a href="https://line.me/ti/p/R12teBUknT">
                    <img src={ contact_line } alt="line" className="footer-contact-image" />
                </a>
                <a href="https://www.linkedin.com/in/phrompong-khagtes-115957188">
                    <img src={ contact_linkIn } alt="linkIn" className="footer-contact-image" />
                </a>
            </div>
        </div >
    </>
}

export default Footer;