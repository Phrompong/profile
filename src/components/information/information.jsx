import "../information/information.css";
import "../middle.css";
import profile_image from "../../images/profile_image.svg";
import contact_tel from "../../images/contact_tel.svg";
import contact_mail from "../../images/contact_mail.svg";
import contact_line from "../../images/contact_line.svg";
import contact_linkIn from "../../images/contact_linkin.svg";

import contact_tel_light_mode from "../../images/contact_tel_light_mode.svg";
import contact_mail_light_mode from "../../images/contact_mail_light_mode.svg";
import contact_line_light_mode from "../../images/contact_line_light_mode.svg";
import contact_linkIn_light_mode from "../../images/contact_linkin_light_mode.svg";

function Information({ informationRef, isDarkMode }) {
  const nickName = "<CHOPPER>";

  const informationAbout =
    "5 years experience in programmer.The scope of work includes Software development,Software structure design, Database management,Software testing for errors and debugging,Review the program regularly and make adjustments as necessary to ensure that it is functioning properly in accordance with current business and integrate new functions into existing applications.";

  return (
    <>
      {/* <div ref={ informationRef } ></div> */}
      <div ref={informationRef} className="information">
        <div className="information-left">
          {/* <div className='information-first-name'>PHROMPONG</div> */}
          <div
            className={
              isDarkMode
                ? "information-first-name-dark-mode"
                : "information-first-name water"
            }
          >
            PHROMPONG
          </div>
          <div className="information-group-last-name-nick-name">
            {/* <div className='information-last-name'> */}
            <div
              className={
                isDarkMode
                  ? "information-first-name-dark-mode"
                  : "information-last-name water"
              }
            >
              KHAGTES
            </div>
            <div
              className={
                isDarkMode
                  ? "information-nick-name-dark-mode"
                  : "information-nick-name water"
              }
            >
              {nickName}
            </div>
          </div>
          <div className="information-position">Full Stack Developer</div>
          <span
            className={
              isDarkMode ? "information-detail-dark-mode" : "information-detail"
            }
          >
            {informationAbout.split("").map((o) => {
              return <span className="char">{o}</span>;
            })}
            {/* 5 years experience in programmer.
                    The scope of work includes Software development,
                    Software structure design, Database management,
                    Software testing for errors and debugging,
                    Review the program regularly
                    and make adjustments as necessary
                    to ensure that it is functioning properly in accordance
                    with current business
                    and integrate new functions into existing applications. */}
          </span>
          <div className="information-contact">
            {isDarkMode ? (
              <a href="tel:0952535792">
                <img
                  src={contact_tel_light_mode}
                  alt="tel"
                  className="information-contact-image"
                />
              </a>
            ) : (
              <a href="tel:0952535792">
                <img
                  src={contact_tel}
                  alt="tel"
                  className="information-contact-image"
                />
              </a>
            )}

            {isDarkMode ? (
              <a href="mailto:someone@example.com">
                <img
                  src={contact_mail_light_mode}
                  alt="mail"
                  className="information-contact-image"
                />
              </a>
            ) : (
              <a href="mailto:someone@example.com">
                <img
                  src={contact_mail}
                  alt="mail"
                  className="information-contact-image"
                />
              </a>
            )}

            {isDarkMode ? (
              <a href="https://line.me/ti/p/R12teBUknT">
                <img
                  src={contact_line_light_mode}
                  alt="line"
                  className="information-contact-image"
                />
              </a>
            ) : (
              <a href="https://line.me/ti/p/R12teBUknT">
                <img
                  src={contact_line}
                  alt="line"
                  className="information-contact-image"
                />
              </a>
            )}

            {isDarkMode ? (
              <a href="https://www.linkedin.com/in/phrompong-khagtes-115957188">
                <img
                  src={contact_linkIn_light_mode}
                  alt="linkIn"
                  className="information-contact-image"
                />
              </a>
            ) : (
              <a href="https://www.linkedin.com/in/phrompong-khagtes-115957188">
                <img
                  src={contact_linkIn}
                  alt="linkIn"
                  className="information-contact-image"
                />
              </a>
            )}
          </div>
        </div>
        <div className="information-right">
          <img src={profile_image} className="information-image"></img>
        </div>
      </div>

      {/* Information Mobile */}
      <div ref={informationRef} className="information-mobile">
        <div
          className={
            isDarkMode
              ? "information-mobile-first-name-dark-mode"
              : "information-mobile-first-name"
          }
        >
          Phrompong
        </div>
        <div
          className={
            isDarkMode
              ? "information-mobile-last-name-dark-mode"
              : "information-mobile-last-name"
          }
        >
          Khagtes
        </div>
        <div
          className={
            isDarkMode
              ? "information-mobile-nick-name-dark-mode"
              : "information-mobile-nick-name"
          }
        >
          {" "}
          {nickName}
        </div>
        <img src={profile_image} className="information-image"></img>
        <div className="information-mobile-position">Full Stack Developer</div>
        <span
          className={
            isDarkMode
              ? "information-mobile-detail-dark-mode"
              : "information-mobile-detail"
          }
        >
          5 years experience in programmer. The scope of work includes Software
          development, Software structure design, Database management, Software
          testing for errors and debugging, Review the program regularly and
          make adjustments as necessary to ensure that it is functioning
          properly in accordance with current business and integrate new
          functions into existing applications.
        </span>
        <div className="information-mobile-contact">
          {isDarkMode ? (
            <a href="tel:0952535792">
              <img
                src={contact_tel_light_mode}
                alt="tel"
                className="information-contact-image"
              />
            </a>
          ) : (
            <a href="tel:0952535792">
              <img
                src={contact_tel}
                alt="tel"
                className="information-contact-image"
              />
            </a>
          )}

          {isDarkMode ? (
            <a href="mailto:someone@example.com">
              <img
                src={contact_mail_light_mode}
                alt="mail"
                className="information-contact-image"
              />
            </a>
          ) : (
            <a href="mailto:someone@example.com">
              <img
                src={contact_mail}
                alt="mail"
                className="information-contact-image"
              />
            </a>
          )}

          {isDarkMode ? (
            <a href="https://line.me/ti/p/R12teBUknT">
              <img
                src={contact_line_light_mode}
                alt="line"
                className="information-contact-image"
              />
            </a>
          ) : (
            <a href="https://line.me/ti/p/R12teBUknT">
              <img
                src={contact_line}
                alt="line"
                className="information-contact-image"
              />
            </a>
          )}

          {isDarkMode ? (
            <a href="https://www.linkedin.com/in/phrompong-khagtes-115957188">
              <img
                src={contact_linkIn_light_mode}
                alt="linkIn"
                className="information-contact-image"
              />
            </a>
          ) : (
            <a href="https://www.linkedin.com/in/phrompong-khagtes-115957188">
              <img
                src={contact_linkIn}
                alt="linkIn"
                className="information-contact-image"
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Information;
