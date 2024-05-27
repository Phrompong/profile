import "../experiences/experience.css";
import TNLogo from "../../images/logo_TN_experience.png";
import PTTLogo from "../../images/logo_PTT_experience.png";
import FusionLogo from "../../images/logo_Fusion_experience.png";
import CSILogo from "../../images/logo_CSI.png";

function Experience() {
    const details = [
        {
            logo: TNLogo,
            companyName: "Advanced Personnel and Solutions Co., Ltd.",
            period: "Sep 2023 - Present",
            companySub: "(Onsite TN Incorporation limited.)",
            position: "Senior Full Stack Developer",
            projects: [{
                name: "Sales system : Government Savings Bank",
                details: [
                    "Develop back-end using NodeJS, RabbitMQ, MongoDB, SQL",
                    "Design API backend and Database Structure",
                    "Agile Methodology"
                ]
            }]
        },
        {
            logo: PTTLogo,
            companyName: "Solution Link Co.Ltd.",
            period: "Feb 2020 - Aug 2023",
            companySub: "(Onsite PTT Digital Solutions Co.Ltd.)",
            position: "Full Stack Developer",
            projects: [
                {
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
            logo: FusionLogo,
            companyName: "Fusion Solution Co.,Ltd.",
            period: "Jul 2019 - Jan 2020",
            position: "Programmer",
            projects: [
                {
                    name: "Cigna anywhere : Cigna Insurance PCL",
                    details: [
                        "Develop back-end using .NET",
                        "Design database and workflow",
                    ]
                },

            ]
        },
        {
            logo: CSILogo,
            companyName: "C.S.I. GROUP",
            period: "Jun 2018 - Jun 2019",
            position: "System Programmer",
            projects: [
                {
                    name: "Inventory management system : Panasonic Thailand",
                    details: [
                        "Develop back-end and front-end using .NET, SQL , Store Procedure, Crystal Report, Javascript , HTML, CSS, Bootstrap"
                    ]
                },
                {
                    name: "Online request system : Yip In Tsoi Co., LTD.",
                    details: [
                        "Develop back-end and front-end using .NET, SQL , Store Procedure, Crystal Report, Javascript , HTML, CSS, Bootstrap"
                    ]
                },
                {
                    name: "Product Line system : Teijin Polyester (Thailand) Limited.",
                    details: [
                        "Develop back-end and front-end using .NET, SQL , Store Procedure, Crystal Report, Javascript , HTML, CSS, Bootstrap"
                    ]
                },

            ]
        }
        , {
            // logo: CSILogo,
            companyName: "OTHER",
            // period: "Jun 2018 - Jun 2019",
            position: "Full Stack Developer",
            projects: [
                {
                    name: "Schedule training management system : SEAC",
                    details: [
                        "Develop back-end using .NET, MySQL"
                    ]
                },
                {
                    name: "CCTV : AI FiRST",
                    details: [
                        "Develop back-end and front-end using Angular, .NET, MySQL, Ashura, Yitu"
                    ]
                },
                {
                    name: "Smart city on cloud : AI FiRST",
                    details: [
                        "Develop back-end using NodeJS, MySQL, Clarify, Ashura"
                    ]
                },
                {
                    name: "Electronic Right Offering : Asia wealth securities company limited",
                    details: [
                        "Develop back-end and front-end using NodeJS, ReactJS, Mongo DB"
                    ]
                },
                {
                    name: "Shipper System : Gulf Energy Development Public Company Limited",
                    details: [
                        "Develop back-end and front-end using NestJS, ReactJS, MySQL"
                    ]
                },

            ]
        }

    ];

    return <>

        <div className="experience-topic">EXPERIENCE</div>
        <div className="container">
            { details && details.map(({ logo, companyName, period, companySub, position, projects }, index) => {
                return (
                    <div className="experience-card" key={ index }>
                        <div className="experience-card-first">
                            <img className="experience-card-name-image" src={ logo }></img>
                            <div className="experience-card-name-company">
                                { companyName }
                            </div>
                            <div className="experience-card-period">{ period }</div>
                            <div className="experience-card-name-company-second">{ companySub }</div>
                        </div>

                        <div className="experience-card-second">{ position }</div>

                        <div className="experience-card-third">
                            { projects && projects.map(({ name, details }, index) => {
                                return (
                                    <>
                                        <div className="experience-card-third-project-name">{ name }</div>
                                        <div className="experience-card-third-project-group-detail">
                                            { details.map((detail, index) => {
                                                return <>  <li className="experience-card-third-project-name-detail">{ detail }</li></>
                                            }) }
                                        </div>
                                    </>
                                )
                            }) }

                        </div>
                    </div>
                )
            }) }



        </div >

        {/* Mobile */ }
        <div className="container-mobile">
            { details.map(({ logo, companyName, companySub, period, position, projects }, index) => {
                return <>
                    <div className="mobile-experience-card">
                        <img className="mobile-experience-card-name-image" src={ logo }></img>
                        <div className="mobile-experience-card-name-company">
                            { companyName }
                        </div>
                        <div className="mobile-experience-card-name-company-second">{ companySub }</div>
                        <div className="mobile-experience-card-period">{ period }</div>

                        <div className="mobile-experience-card-second">{ position }</div>

                        <div className="mobile-experience-card-third">
                            { projects && projects.map(({ name, details }, index) => {
                                return (
                                    <>
                                        <div className="mobile-experience-card-third-project-name">{ name }</div>
                                        <div className="mobile-experience-card-third-project-group-detail">
                                            { details.map((detail, index) => {
                                                return <>  <li className="mobile-experience-card-third-project-name-detail">{ detail }</li></>
                                            }) }
                                        </div>
                                    </>
                                )
                            }) }

                        </div>
                    </div>
                </>
            }) }
        </div>


    </>
}

export default Experience;