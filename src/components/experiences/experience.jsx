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
      period: "Jul 2024 - Present",
      companySub: "",
      position: "Full Stack Developer",
      projects: [
        {
          id: 1,
          name: "CDDP - Community Driven Development Project (GIS Platform for Local Government)",
          details: [
            { en: "Build water management system (loss analysis, smart meters, DMA, valves, pressure, flow meters) with Mapbox GL map layers and filter hooks", th: "พัฒนาระบบจัดการน้ำ (วิเคราะห์น้ำสูญเสีย, มิเตอร์อัจฉริยะ, DMA, วาล์ว, แรงดัน, มิเตอร์วัดอัตราการไหล) พร้อม Mapbox GL map layers และ filter hooks" },
            { en: "Develop veterinary module end-to-end — pet registration, vaccine tracking, stray animal management with map integration and S3 image upload", th: "พัฒนาระบบสัตวแพทย์แบบครบวงจร — ลงทะเบียนสัตว์เลี้ยง, ติดตามวัคซีน, จัดการสัตว์จรจัดพร้อมแผนที่และอัปโหลดรูปผ่าน S3" },
            { en: "Build rainfall and weather analytics with Chart.js (multi-resolution: 15-min, hourly, daily, monthly) and data export", th: "พัฒนาระบบวิเคราะห์ปริมาณน้ำฝนและสภาพอากาศด้วย Chart.js (หลายความละเอียด: 15 นาที, รายชั่วโมง, รายวัน, รายเดือน) พร้อมส่งออกข้อมูล" },
            { en: "Implement welfare management modules (elderly, disabled, newborn, dependent patient) with search, forms, and status tracking", th: "พัฒนาระบบจัดการสวัสดิการ (ผู้สูงอายุ, ผู้พิการ, ทารกแรกเกิด, ผู้ป่วยติดเตียง) พร้อมค้นหา, ฟอร์ม และติดตามสถานะ" },
            { en: "Develop backend services using NestJS and TypeORM with complex PostgreSQL queries (CTEs, window functions, GeoJSON geometry)", th: "พัฒนา Backend ด้วย NestJS และ TypeORM พร้อม PostgreSQL queries ขั้นสูง (CTEs, window functions, GeoJSON geometry)" },
            { en: "Build garbage collection map layers with zone filtering, payment status tracking, and fee analytics", th: "พัฒนา Map layers ระบบจัดเก็บขยะ พร้อมกรองตามโซน, ติดตามสถานะการชำระเงิน และวิเคราะห์ค่าธรรมเนียม" },
            { en: "Develop frontend using React 18, TypeScript, Ant Design, and Tailwind CSS with TanStack React Query for data fetching", th: "พัฒนา Frontend ด้วย React 18, TypeScript, Ant Design และ Tailwind CSS พร้อม TanStack React Query สำหรับดึงข้อมูล" },
            { en: "Write unit tests with Jest and Vitest, maintain Docker security updates, and manage database migrations", th: "เขียน Unit Test ด้วย Jest และ Vitest, ดูแลอัปเดตความปลอดภัย Docker และจัดการ Database Migrations" },
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
            { en: "Develop back-end microservices using Node.js, RabbitMQ, MongoDB, and SQL Server", th: "พัฒนา Microservices ฝั่ง Back-end ด้วย Node.js, RabbitMQ, MongoDB และ SQL Server" },
            { en: "Design RESTful API specifications and database schema", th: "ออกแบบ RESTful API และโครงสร้างฐานข้อมูล" },
            { en: "Implement sales pipeline features (lead tracking, target management, reporting)", th: "พัฒนาระบบ Sales Pipeline (ติดตามลูกค้า, จัดการเป้าหมาย, รายงาน)" },
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
            { en: "Develop back-end microservices using Node.js, .NET, RabbitMQ, and Redis", th: "พัฒนา Microservices ฝั่ง Back-end ด้วย Node.js, .NET, RabbitMQ และ Redis" },
            { en: "Develop front-end POS interface using ReactJS", th: "พัฒนาหน้า POS ฝั่ง Front-end ด้วย ReactJS" },
            { en: "Design database schema and system workflow for POS operations", th: "ออกแบบโครงสร้างฐานข้อมูลและ Workflow ของระบบ POS" },
            { en: "Write functional test scripts using Mocha and conduct code reviews", th: "เขียน Functional Test ด้วย Mocha และทำ Code Review" },
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
            { en: "Develop back-end RESTful API using ASP.NET", th: "พัฒนา RESTful API ฝั่ง Back-end ด้วย ASP.NET" },
            { en: "Design database schema and system workflow", th: "ออกแบบโครงสร้างฐานข้อมูลและ Workflow ของระบบ" },
            { en: "Implement insurance policy and claim processing features", th: "พัฒนาระบบจัดการกรมธรรม์และเคลมประกัน" },
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
            { en: "Develop full-stack web app using ASP.NET, SQL Server, and Stored Procedures", th: "พัฒนาเว็บแอปแบบ Full-stack ด้วย ASP.NET, SQL Server และ Stored Procedures" },
            { en: "Implement inventory tracking (stock-in, stock-out, adjustment) with Crystal Report", th: "พัฒนาระบบติดตามสินค้าคงคลัง (รับเข้า, เบิกออก, ปรับปรุง) พร้อมรายงาน Crystal Report" },
          ],
        },
        {
          id: 2,
          name: "Online request system : Yip In Tsoi Co., LTD.",
          details: [
            { en: "Develop full-stack web app using ASP.NET, SQL Server, and Stored Procedures", th: "พัฒนาเว็บแอปแบบ Full-stack ด้วย ASP.NET, SQL Server และ Stored Procedures" },
            { en: "Implement request submission, approval workflow, and status tracking", th: "พัฒนาระบบส่งคำขอ, Workflow อนุมัติ และติดตามสถานะ" },
          ],
        },
        {
          id: 3,
          name: "Product Line system : Teijin Polyester (Thailand) Limited.",
          details: [
            { en: "Develop full-stack web app using ASP.NET, SQL Server, and Stored Procedures", th: "พัฒนาเว็บแอปแบบ Full-stack ด้วย ASP.NET, SQL Server และ Stored Procedures" },
            { en: "Implement production line monitoring and performance reporting", th: "พัฒนาระบบติดตามสายการผลิตและรายงานประสิทธิภาพ" },
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
            { en: "Develop back-end RESTful API using ASP.NET and MySQL", th: "พัฒนา RESTful API ฝั่ง Back-end ด้วย ASP.NET และ MySQL" },
            { en: "Implement course registration, seat availability tracking, and multi-trainer scheduling", th: "พัฒนาระบบลงทะเบียนคอร์ส, ตรวจสอบที่นั่ง และจัดตารางวิทยากร" },
            { en: "Design database schema to support multi-course scheduling workflows", th: "ออกแบบโครงสร้างฐานข้อมูลสำหรับ Workflow การจัดตารางหลายคอร์ส" },
          ],
        },
        {
          id: 2,
          name: "CCTV : AI FiRST",
          details: [
            { en: "Develop front-end using Angular and back-end using ASP.NET with MySQL", th: "พัฒนา Front-end ด้วย Angular และ Back-end ด้วย ASP.NET กับ MySQL" },
            { en: "Integrate AI-powered camera systems (Ashura, Yitu) for real-time video analytics", th: "เชื่อมต่อระบบกล้อง AI (Ashura, Yitu) สำหรับวิเคราะห์วิดีโอแบบเรียลไทม์" },
            { en: "Implement face detection and recognition features for surveillance monitoring", th: "พัฒนาระบบตรวจจับและจดจำใบหน้าสำหรับระบบเฝ้าระวัง" },
          ],
        },
        {
          id: 3,
          name: "Smart city on cloud : AI FiRST",
          details: [
            { en: "Develop back-end services using Node.js and MySQL", th: "พัฒนาบริการ Back-end ด้วย Node.js และ MySQL" },
            { en: "Integrate cloud-based AI services (Clarify, Ashura) for smart city data processing", th: "เชื่อมต่อบริการ AI บนคลาวด์ (Clarify, Ashura) สำหรับประมวลผลข้อมูล Smart City" },
            { en: "Implement APIs for IoT device data collection and real-time monitoring dashboard", th: "พัฒนา API สำหรับเก็บข้อมูล IoT และแดชบอร์ดติดตามแบบเรียลไทม์" },
          ],
        },
        {
          id: 4,
          name: "Electronic Right Offering : Asia wealth securities company limited",
          details: [
            { en: "Develop back-end RESTful API using Node.js and MongoDB", th: "พัฒนา RESTful API ฝั่ง Back-end ด้วย Node.js และ MongoDB" },
            { en: "Develop front-end using ReactJS for electronic rights offering portal", th: "พัฒนา Front-end ด้วย ReactJS สำหรับระบบเสนอขายหุ้นอิเล็กทรอนิกส์" },
            { en: "Implement shareholder rights subscription workflow and transaction management", th: "พัฒนา Workflow การจองสิทธิ์ผู้ถือหุ้นและจัดการธุรกรรม" },
          ],
        },
        {
          id: 5,
          name: "Shipper System : Gulf Energy Development Public Company Limited",
          details: [
            { en: "Develop back-end using NestJS with MySQL", th: "พัฒนา Back-end ด้วย NestJS กับ MySQL" },
            { en: "Develop front-end using ReactJS for shipment management interface", th: "พัฒนา Front-end ด้วย ReactJS สำหรับระบบจัดการการขนส่ง" },
            { en: "Implement shipment tracking, delivery scheduling, and logistics reporting", th: "พัฒนาระบบติดตามการขนส่ง, จัดตารางจัดส่ง และรายงานโลจิสติกส์" },
          ],
        },
        {
          id: 6,
          name: "Medilance : Healthcare Freelance Marketplace",
          details: [
            { en: "Develop mobile app using React Native, Expo, and TypeScript with Zustand for state management", th: "พัฒนาแอปมือถือด้วย React Native, Expo และ TypeScript พร้อม Zustand สำหรับจัดการ State" },
            { en: "Build interactive UI with React Native Paper, Bottom Sheet, and form handling with Formik/Yup", th: "สร้าง UI แบบโต้ตอบด้วย React Native Paper, Bottom Sheet และจัดการฟอร์มด้วย Formik/Yup" },
            { en: "Implement Google Maps integration with location-based job search and GPS check-in features", th: "เชื่อมต่อ Google Maps พร้อมระบบค้นหางานตามตำแหน่งและเช็คอินด้วย GPS" },
          ],
        },
      ],
    },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top + 15;
    e.currentTarget.style.setProperty("--tooltip-x", `${x}px`);
    e.currentTarget.style.setProperty("--tooltip-y", `${y}px`);
  };

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
                                  onMouseMove={handleMouseMove}
                                >
                                  {detail.en}
                                  <span className="detail-tooltip-text">{detail.th}</span>
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
                                onMouseMove={handleMouseMove}
                              >
                                {detail.en}
                                <span className="detail-tooltip-text">{detail.th}</span>
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
