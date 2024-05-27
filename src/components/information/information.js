import "../information/information.css";
import profile_image from '../../images/profile_image.png';
import contact_tel from "../../images/contact_tel.png";
import contact_mail from "../../images/contact_mail.png";
import contact_line from "../../images/contact_line.png";
import contact_linkIn from "../../images/contact_linkin.png";

function Information({ informationRef }) {
    const nickName = "<CHOPPER>";

    return <>
        {/* <div ref={ informationRef } ></div> */ }
        <div ref={ informationRef } className='information'>
            <div className='information-left'>
                <div className='information-first-name'>PHROMPONG</div>
                <div className='information-group-last-name-nick-name'>
                    <div className='information-last-name'>
                        KHAGTES

                    </div>
                    <div className='information-nick-name'>{ nickName }</div>
                </div>
                <div className='information-position'>Full Stack  Developer</div>
                <span className='information-detail'>
                    5 years experience in programmer.
                    The scope of work includes Software development,
                    Software structure design, Database management,
                    Software testing for errors and debugging,
                    Review the program regularly
                    and make adjustments as necessary
                    to ensure that it is functioning properly in accordance
                    with current business
                    and integrate new functions into existing applications.
                </span>
                <div className="information-contact">
                    <a href="tel:0952535792">
                        <img src={ contact_tel } alt="tel" className="information-contact-image" />
                    </a>
                    <a href="mailto:someone@example.com">
                        <img src={ contact_mail } alt="mail" className="information-contact-image" />
                    </a>
                    <a href="https://line.me/ti/p/R12teBUknT">
                        <img src={ contact_line } alt="line" className="information-contact-image" />
                    </a>
                    <a href="https://www.linkedin.com/in/phrompong-khagtes-115957188">
                        <img src={ contact_linkIn } alt="linkIn" className="information-contact-image" />
                    </a>
                </div>
            </div>
            <div className='information-right'>
                <img src={ profile_image } className='information-image'></img>
            </div>
        </div >

        {/* Information Mobile */ }
        < div ref={ informationRef } className='information-mobile' >
            <div className='information-mobile-first-name'>Phrompong</div>
            <div className='information-mobile-last-name'>Khagtes</div>
            <div className='information-mobile-nick-name'>{ nickName }</div>
            <img src={ profile_image } className='information-image'></img>
            <div className='information-mobile-position'>Full Stack  Developer</div>
            <span className='information-mobile-detail'>
                5 years experience in programmer.
                The scope of work includes Software development,
                Software structure design, Database management,
                Software testing for errors and debugging,
                Review the program regularly
                and make adjustments as necessary
                to ensure that it is functioning properly in accordance
                with current business
                and integrate new functions into existing applications.
            </span>
            <div className="information-mobile-contact">
                <a href="tel:0952535792">
                    <img src={ contact_tel } alt="tel" className="information-mobile-contact-image" />
                </a>
                <a href="mailto:someone@example.com">
                    <img src={ contact_mail } alt="mail" className="information-mobile-contact-image" />
                </a>
                <a href="https://line.me/ti/p/R12teBUknT">
                    <img src={ contact_line } alt="line" className="information-mobile-contact-image" />
                </a>
                <a href="https://www.linkedin.com/in/phrompong-khagtes-115957188">
                    <img src={ contact_linkIn } alt="linkIn" className="information-mobile-contact-image" />
                </a>
            </div>
        </div >
    </>
}

export default Information;