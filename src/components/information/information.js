import "../information/information.css";
import profile_image from '../../images/profile_image.png';

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
            </div>
            <div className='information-right'>
                <img src={ profile_image } className='information-image'></img>
            </div>
        </div>

        {/* Information Mobile */ }
        <div ref={ informationRef } className='information-mobile'>
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
        </div>
    </>
}

export default Information;