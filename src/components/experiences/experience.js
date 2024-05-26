import "../experiences/experience.css";
import TNLogo from "../../images/logo_TN_experience.png";

function Experience() {
    return <>
        <div className="experience-topic">EXPERIENCE</div>
        <div className="container">
            <div className="experience-card">
                <div className="experience-card-first">
                    <img className="experience-card-name-image" src={ TNLogo }></img>
                    <div className="experience-card-name-company">
                        Advanced Personnel and Solutions Co., Ltd.
                    </div>
                    <div className="experience-card-period">Sep 2023 - Present</div>
                    <div className="experience-card-name-company-second">(Onsite TN Incorporation limited.)</div>
                </div>

                <div className="experience-card-second">Full Stack Developer</div>

                <div className="experience-card-third">
                    <div className="experience-card-third-project-name">Sales system : Government Savings Bank</div>
                    <div className="experience-card-third-project-group-detail">
                        <li className="experience-card-third-project-name-detail">Develop back-end using NodeJS, RabbitMQ, MongoDB, SQL</li>
                        <li className="experience-card-third-project-name-detail">Design API backend and Database Structure</li>
                        <li className="experience-card-third-project-name-detail">Agile Methodology</li>
                    </div>
                </div>
            </div>


        </div >
    </>
}

export default Experience;