import "../experiences/experience.css";
import TNLogo from "../../images/logo_TN_experience.svg";
import PTTLogo from "../../images/logo_PTT_experience.svg";
import FusionLogo from "../../images/logo_Fusion_experience.svg";
import CSILogo from "../../images/logo_CSI.svg";
import BedrockLogo from "../../images/logo_bedrock.svg";

import TNLogoLightMode from "../../images/logo_tn_light_mode.svg";
import PttLogoLightMode from "../../images/logo_ptt_light_mode.svg";
import FusionLightMode from "../../images/logo_fusion_light_mode.svg";
import CsiLightMode from "../../images/logo_csi_light_mode.svg";
import BedrockLightMode from "../../images/logo_bedrock_light_mode.svg";

function Experience({ experienceRef, isDarkMode }) {
  const details = [
    {
      logo: isDarkMode ? BedrockLightMode : BedrockLogo,
      companyName: "Bedrock Analytics",
      period: "ระบุช่วงเวลา",
      companySub: "",
      position: "Full Stack Developer",
      projects: [
        {
          id: 1,
          name: "CDDP - Community Driven Development Project (GIS Platform for Local Government)",
          details: [
            "Build full-stack GIS platform for local governments using NestJS, TypeORM, and PostgreSQL with PostGIS",
            "Implement interactive map visualization with React 18, TypeScript, and Mapbox GL (50+ dynamic layers)",
            "Design water management system with smart meter monitoring and DMA pipeline tracking",
            "Integrate AWS services (S3, SQS, Kinesis Video Streams) for storage, async processing, and CCTV",
            "Implement RBAC with SSO/JWT authentication and granular permissions",
            "Build data export system with SQS queue processing and scheduled cron jobs",
            "Manage frontend state with Zustand and TanStack React Query, styled with Ant Design and Tailwind CSS",
            "Deploy with Docker on Kubernetes (Helm), CI/CD via GitLab, monitoring via Sentry",
          ],
        },
      ],
    },
    {
      logo: isDarkMode ? TNLogoLightMode : TNLogo,
      companyName: "TN Incorporation limited.",
      period: "Sep 2023 - Jun 2024",
      companySub: "",
      position: "Senior Full Stack Developer",
      projects: [
        {
          id: 1,
          name: "Sales system : Government Savings Bank",
          details: [
            "Develop back-end microservices using Node.js, RabbitMQ, MongoDB, and SQL Server",
            "Design RESTful API specifications and database schema",
            "Implement sales pipeline features (lead tracking, target management, reporting)",
          ],
        },
      ],
    },
    {
      logo: isDarkMode ? PttLogoLightMode : PTTLogo,
      companyName: "PTT Digital Solutions Co.Ltd.",
      period: "Feb 2020 - Aug 2023",
      companySub: "",
      position: "Full Stack Developer",
      projects: [
        {
          id: 1,
          name: "NEW POS : PTT Oil and Retail Business PCL (OR)",
          details: [
            "Develop back-end microservices using Node.js, .NET, RabbitMQ, and Redis",
            "Develop front-end POS interface using ReactJS",
            "Design database schema and system workflow for POS operations",
            "Write functional test scripts using Mocha and conduct code reviews",
          ],
        },
      ],
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
            "Develop back-end RESTful API using ASP.NET",
            "Design database schema and system workflow",
            "Implement insurance policy and claim processing features",
          ],
        },
      ],
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
            "Develop full-stack web app using ASP.NET, SQL Server, and Stored Procedures",
            "Implement inventory tracking (stock-in, stock-out, adjustment) with Crystal Report",
          ],
        },
        {
          id: 2,
          name: "Online request system : Yip In Tsoi Co., LTD.",
          details: [
            "Develop full-stack web app using ASP.NET, SQL Server, and Stored Procedures",
            "Implement request submission, approval workflow, and status tracking",
          ],
        },
        {
          id: 3,
          name: "Product Line system : Teijin Polyester (Thailand) Limited.",
          details: [
            "Develop full-stack web app using ASP.NET, SQL Server, and Stored Procedures",
            "Implement production line monitoring and performance reporting",
          ],
        },
      ],
    },
    {
      companyName: "OTHER",
      position: "Full Stack Developer",
      projects: [
        {
          id: 1,
          name: "Schedule training management system : SEAC",
          details: [
            "Develop back-end RESTful API using ASP.NET and MySQL",
            "Implement course registration, seat availability tracking, and multi-trainer scheduling",
            "Design database schema to support multi-course scheduling workflows",
          ],
        },
        {
          id: 2,
          name: "CCTV : AI FiRST",
          details: [
            "Develop front-end using Angular and back-end using ASP.NET with MySQL",
            "Integrate AI-powered camera systems (Ashura, Yitu) for real-time video analytics",
            "Implement face detection and recognition features for surveillance monitoring",
          ],
        },
        {
          id: 3,
          name: "Smart city on cloud : AI FiRST",
          details: [
            "Develop back-end services using Node.js and MySQL",
            "Integrate cloud-based AI services (Clarify, Ashura) for smart city data processing",
            "Implement APIs for IoT device data collection and real-time monitoring dashboard",
          ],
        },
        {
          id: 4,
          name: "Electronic Right Offering : Asia wealth securities company limited",
          details: [
            "Develop back-end RESTful API using Node.js and MongoDB",
            "Develop front-end using ReactJS for electronic rights offering portal",
            "Implement shareholder rights subscription workflow and transaction management",
          ],
        },
        {
          id: 5,
          name: "Shipper System : Gulf Energy Development Public Company Limited",
          details: [
            "Develop back-end using NestJS with MySQL",
            "Develop front-end using ReactJS for shipment management interface",
            "Implement shipment tracking, delivery scheduling, and logistics reporting",
          ],
        },
        {
          id: 6,
          name: "Medilance : Healthcare Freelance Marketplace",
          details: [
            "Develop mobile app using React Native, Expo, and TypeScript with Zustand for state management",
            "Build interactive UI with React Native Paper, Bottom Sheet, and form handling with Formik/Yup",
            "Implement Google Maps integration with location-based job search and GPS check-in features",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div ref={experienceRef} className="container-experience">
        <div
          className={
            isDarkMode ? "experience-topic-dark-mode" : "experience-topic"
          }
        >
          EXPERIENCE
        </div>
        <div className="container">
          {details &&
            details.map(
              (
                { logo, companyName, period, companySub, position, projects },
                index
              ) => {
                return (
                  <div
                    className={
                      isDarkMode
                        ? "experience-card-dark-mode"
                        : "experience-card"
                    }
                    key={companyName}
                  >
                    <div className="experience-card-first">
                      {companyName === "OTHER" ? (
                        <></>
                      ) : (
                        <img
                          className="experience-card-name-image"
                          src={logo}
                          alt={companyName}
                        ></img>
                      )}
                      <div className="experience-card-name-company">
                        {companyName}
                      </div>
                      <div
                        className={
                          isDarkMode
                            ? "experience-card-period-dark-mode"
                            : "experience-card-period"
                        }
                      >
                        {period}
                      </div>
                      <div
                        className={
                          isDarkMode
                            ? "experience-card-name-company-second-dark-mode"
                            : "experience-card-name-company-second"
                        }
                      >
                        {companySub}
                      </div>
                    </div>

                    <div
                      className={
                        isDarkMode
                          ? "experience-card-second-dark-mode"
                          : "experience-card-second"
                      }
                    >
                      {position}
                    </div>

                    <div className="experience-card-third">
                      {projects &&
                        projects.map(({ id, name, details }, index) => (
                          <div
                            key={index}
                            className={
                              isDarkMode
                                ? "experience-card-third-project-name-dark-mode"
                                : "experience-card-third-project-name"
                            }
                          >
                            {name}
                            <div className="experience-card-third-project-group-detail">
                              {details.map((detail, indexDetail) => (
                                <li
                                  key={indexDetail}
                                  className={
                                    isDarkMode
                                      ? "experience-card-third-project-name-detail-dark-mode"
                                      : "experience-card-third-project-name-detail"
                                  }
                                >
                                  {detail}
                                </li>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              }
            )}
        </div>

        {/* Mobile */}
        <div
          className={
            isDarkMode
              ? "mobile-experience-topic-dark-mode"
              : "mobile-experience-topic"
          }
        >
          EXPERIENCE
        </div>
        <div className="container-mobile">
          {details &&
            details.map(
              (
                { logo, companyName, companySub, period, position, projects },
                detailIndex
              ) => (
                <div
                  key={companyName + detailIndex}
                  className={
                    isDarkMode
                      ? "mobile-experience-card-dark-mode"
                      : "mobile-experience-card"
                  }
                >
                  <img
                    className="mobile-experience-card-name-image"
                    src={logo}
                  ></img>
                  <div className="mobile-experience-card-name-company">
                    {companyName}
                  </div>
                  <div
                    className={
                      isDarkMode
                        ? "mobile-experience-card-name-company-second-dark-mode"
                        : "mobile-experience-card-name-company-second"
                    }
                  >
                    {companySub}{" "}
                  </div>
                  <div
                    className={
                      isDarkMode
                        ? "mobile-experience-card-period-dark-mode"
                        : "mobile-experience-card-period"
                    }
                  >
                    {period}
                  </div>
                  <div
                    className={
                      isDarkMode
                        ? "mobile-experience-card-second-dark-mode"
                        : "mobile-experience-card-second"
                    }
                  >
                    {position}
                  </div>
                  <div className="mobile-experience-card-third">
                    {projects &&
                      projects.map(({ name, details }, projectIndex) => (
                        <div key={projectIndex}>
                          <div
                            className={
                              isDarkMode
                                ? "mobile-experience-card-third-project-name-dark-mode"
                                : "mobile-experience-card-third-project-name"
                            }
                          >
                            {name}
                          </div>
                          <div className="mobile-experience-card-third-project-group-detail">
                            {details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={
                                  isDarkMode
                                    ? "mobile-experience-card-third-project-name-detail-dark-mode"
                                    : "mobile-experience-card-third-project-name-detail"
                                }
                              >
                                {detail}
                              </li>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
}

export default Experience;
