import "../experiences/experience.css";
import TNLogo from "../../images/logo_TN_experience.png";
import PTTLogo from "../../images/logo_PTT_experience.png";
import FusionLogo from "../../images/logo_Fusion_experience.png";
import CSILogo from "../../images/logo_CSI.png";

import TNLogoLightMode from "../../images/logo_tn_light_mode.png";
import PttLogoLightMode from "../../images/logo_ptt_light_mode.png";
import FusionLightMode from "../../images/logo_fusion_light_mode.png";
import CsiLightMode from "../../images/logo_csi_light_mode.png";

import ProfileImage from "../../images/chopper.png";

function Experience({ experienceRef, isDarkMode }) {
    const details = [
        {
            logo: isDarkMode ? TNLogoLightMode : TNLogo,
            companyName: "Advanced Personnel and Solutions Co., Ltd.",
            period: "Sep 2023 - Present",
            companySub: "(Onsite TN Incorporation limited.)",
            position: "Senior Full Stack Developer",
            projects: [{
                id: 1,
                name: "Sales system : Government Savings Bank",
                details: [
                    "Develop back-end using NodeJS, RabbitMQ, MongoDB, SQL",
                    "Design API backend and Database Structure",
                    "Agile Methodology"
                ]
            }]
        },
        {
            logo: isDarkMode ? PttLogoLightMode : PTTLogo,
            companyName: "Solution Link Co.Ltd.",
            period: "Feb 2020 - Aug 2023",
            companySub: "(Onsite PTT Digital Solutions Co.Ltd.)",
            position: "Full Stack Developer",
            projects: [
                {
                    id: 1,
                    name: "NEW POS : PTT Oil and Retail Business PCL (OR)",
                    details: [
                        "Develop back-end using NodeJS, RabbitMQ, Redis, .NET, MongoDB, SQL",
                        "Develop front-end using ReactJS",
                        "Design database and workflow",
                        "Review a team member's source code before submitting to merge request",
                        "Create script for functional test (Mocha)"
                    ]
                },

            ]
        },
        {
            logo: isDarkMode ? FusionLightMode : FusionLogo,
            companyName: "Fusion Solution Co.,Ltd.",
            period: "Jul 2019 - Jan 2020",
            position: "Programmer",
            projects: [
                {
                    id: 1,
                    name: "Cigna anywhere : Cigna Insurance PCL",
                    details: [
                        "Develop back-end using .NET",
                        "Design database and workflow",
                    ]
                },

            ]
        },
        {
            logo: isDarkMode ? CsiLightMode : CSILogo,
            companyName: "C.S.I. GROUP",
            period: "Jun 2018 - Jun 2019",
            position: "System Programmer",
            projects: [
                {
                    id: 1,
                    name: "Inventory management system : Panasonic Thailand",
                    details: [
                        "Develop back-end and front-end using .NET, SQL , Store Procedure, Crystal Report, Javascript , HTML, CSS, Bootstrap"
                    ]
                },
                {
                    id: 2,
                    name: "Online request system : Yip In Tsoi Co., LTD.",
                    details: [
                        "Develop back-end and front-end using .NET, SQL , Store Procedure, Crystal Report, Javascript , HTML, CSS, Bootstrap"
                    ]
                },
                {
                    id: 3,
                    name: "Product Line system : Teijin Polyester (Thailand) Limited.",
                    details: [
                        "Develop back-end and front-end using .NET, SQL , Store Procedure, Crystal Report, Javascript , HTML, CSS, Bootstrap"
                    ]
                },

            ]
        }
        , {

            companyName: "OTHER",
            // period: "Jun 2018 - Jun 2019",
            position: "Full Stack Developer",
            projects: [
                {
                    id: 1,
                    name: "Schedule training management system : SEAC",
                    details: [
                        "Develop back-end using .NET, MySQL"
                    ]
                },
                {
                    id: 2,
                    name: "CCTV : AI FiRST",
                    details: [
                        "Develop back-end and front-end using Angular, .NET, MySQL, Ashura, Yitu"
                    ]
                },
                {
                    id: 3,
                    name: "Smart city on cloud : AI FiRST",
                    details: [
                        "Develop back-end using NodeJS, MySQL, Clarify, Ashura"
                    ]
                },
                {
                    id: 4,
                    name: "Electronic Right Offering : Asia wealth securities company limited",
                    details: [
                        "Develop back-end and front-end using NodeJS, ReactJS, Mongo DB"
                    ]
                },
                {
                    id: 5,
                    name: "Shipper System : Gulf Energy Development Public Company Limited",
                    details: [
                        "Develop back-end and front-end using NestJS, ReactJS, MySQL"
                    ]
                },

            ]
        }

    ];

    return <>

        <div ref={ experienceRef } className="container-experience">
            <div className={ isDarkMode ? "experience-topic-dark-mode" : "experience-topic" }>EXPERIENCE</div>
            <div className="container">
                { details && details.map(({ logo, companyName, period, companySub, position, projects }, index) => {
                    return (
                        <div className={ isDarkMode ? "experience-card-dark-mode" : "experience-card" } key={ companyName }>
                            <div className="experience-card-first">
                                { companyName === "OTHER" ? <></> : <img className="experience-card-name-image" src={ logo } alt={ companyName }></img> }
                                <div className="experience-card-name-company">
                                    { companyName }
                                </div>
                                <div className={ isDarkMode ? "experience-card-period-dark-mode" : "experience-card-period" }>{ period }</div>
                                <div className={ isDarkMode ? "experience-card-name-company-second-dark-mode" : "experience-card-name-company-second" }>{ companySub }</div>
                            </div>

                            <div className={ isDarkMode ? "experience-card-second-dark-mode" : "experience-card-second" }>{ position }</div>

                            <div className="experience-card-third">
                                { projects && projects.map(({ id, name, details }, index) => (
                                    <div key={ index } className={ isDarkMode ? "experience-card-third-project-name-dark-mode" : "experience-card-third-project-name" }>
                                        { name }
                                        <div className="experience-card-third-project-group-detail">
                                            { details.map((detail, indexDetail) => (
                                                <li key={ indexDetail } className={ isDarkMode ? "experience-card-third-project-name-detail-dark-mode" : "experience-card-third-project-name-detail" }>
                                                    { detail }
                                                </li>
                                            )) }
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                    )
                }) }



            </div >

            {/* Mobile */ }
            <div className={ isDarkMode ? "mobile-experience-topic-dark-mode" : "mobile-experience-topic" }>EXPERIENCE</div>
            <div className="container-mobile">
                { details && details.map(({ logo, companyName, companySub, period, position, projects }, detailIndex) => (
                    <div key={ companyName + detailIndex } className={ isDarkMode ? "mobile-experience-card-dark-mode" : "mobile-experience-card" }>
                        <img className="mobile-experience-card-name-image" src={ logo }></img>
                        <div className="mobile-experience-card-name-company">
                            { companyName }
                        </div>
                        <div className={ isDarkMode ? "mobile-experience-card-name-company-second-dark-mode" : "mobile-experience-card-name-company-second" }>{ companySub }  </div>
                        <div className={ isDarkMode ? "mobile-experience-card-period-dark-mode" : "mobile-experience-card-period" }>{ period }</div>
                        <div className={ isDarkMode ? "mobile-experience-card-second-dark-mode" : "mobile-experience-card-second" }>{ position }</div>
                        <div className="mobile-experience-card-third">
                            { projects && projects.map(({ name, details }, projectIndex) => (
                                <div key={ projectIndex }>
                                    <div className={ isDarkMode ? "mobile-experience-card-third-project-name-dark-mode" : "mobile-experience-card-third-project-name" }>{ name }</div>
                                    <div className="mobile-experience-card-third-project-group-detail">
                                        { details.map((detail, detailIndex) => (
                                            <li key={ detailIndex } className={ isDarkMode ? "mobile-experience-card-third-project-name-detail-dark-mode" : "mobile-experience-card-third-project-name-detail" }>{ detail }</li>
                                        )) }
                                    </div>
                                </div>
                            )) }

                        </div>
                    </div>

                )) }
            </div >
        </div>


    </>
}

export default Experience;