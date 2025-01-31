import "../skill/skill.css";
import "../middle.css";

import iconTs from "../../images/typescript.svg";
import iconJs from "../../images/javascript.svg";
import iconCSharp from "../../images/c-sharp.svg";
import iconSql from "../../images/sql.svg";
import iconPhp from "../../images/php.svg";
import iconSqlDB from "../../images/sqlDB.svg";
import iconMySql from "../../images/mysqlDB.svg";
import iconMongoDB from "../../images/mongoDB.svg";
import iconOracle from "../../images/oracle.svg";
import iconAngular from "../../images/angular.svg";
import iconNode from "../../images/nodejs.svg";
import iconNest from "../../images/nestjs.svg";
import iconReact from "../../images/reactjs.svg";
import iconAspNet from "../../images/aspnet.svg";
import iconPostGreSql from "../../images/postgreSQL.svg";
import iconNext from "../../images/next.svg";

function Skill({ skillRef, isDarkMode }) {
  return (
    <div ref={skillRef} className="container-skill">
      <div
        className={
          isDarkMode ? "skill-topic-dark-mode fire" : "skill-topic fire"
        }
      >
        SKILLS
      </div>
      <div className="skill">
        <div className="program-lang">
          <span className="program-lang-title">PROGRAMMING LANGUAGES</span>
          <div className="program-lang-icon">
            <img className="img-program-db" src={iconTs}></img>
            <img className="img-program-db" src={iconJs}></img>
            <img className="img-program-db" src={iconCSharp}></img>
            <img className="img-program-db" src={iconSql}></img>
            <img className="img-program-db" src={iconPhp}></img>
          </div>
        </div>
        <div className="program-lang">
          <span className="database-title">DATABASE</span>
          <div className="program-lang-icon">
            <img className="img-program-db" src={iconSqlDB}></img>
            <img className="img-program-db" src={iconMySql}></img>
            <img className="img-program-db" src={iconMongoDB}></img>
            <img className="img-program-db" src={iconOracle}></img>
            <img className="img-program-db" src={iconPostGreSql}></img>
          </div>
        </div>
        <div className="framework">
          <div className="framework-title">FRAMEWORKS</div>
          <div className="framework-lang-icon">
            <img className="img-program-db" src={iconAngular}></img>
            <img className="img-program-db" src={iconNode}></img>
            <img className="img-program-db" src={iconNest}></img>
            <img className="img-program-db" src={iconReact}></img>
            <img className="img-program-db" src={iconAspNet}></img>
            <img className="img-program-db" src={iconNext}></img>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        ref={skillRef}
        className={
          isDarkMode ? "mobile-skill-topic-dark-mode" : "mobile-skill-topic"
        }
      >
        SKILLS
      </div>
      <div className="mobile-skill">
        <div className="mobile-program-lang">
          <span className="mobile-program-lang-title">
            PROGRAMMING LANGUAGES
          </span>
          <div className="mobile-program-lang-icon">
            <img className="mobile-img-program-db" src={iconTs}></img>
            <img className="mobile-img-program-db" src={iconJs}></img>
            <img className="mobile-img-program-db" src={iconCSharp}></img>
            <img className="mobile-img-program-db" src={iconSql}></img>
            <img className="mobile-img-program-db" src={iconPhp}></img>
          </div>
        </div>
        <div className="mobile-program-lang">
          <span className="mobile-database-title">DATABASExx</span>
          <div className="mobile-program-lang-icon">
            <img className="mobile-img-program-db" src={iconSqlDB}></img>
            <img className="mobile-img-program-db" src={iconMySql}></img>
            <img className="mobile-img-program-db" src={iconMongoDB}></img>
            <img className="mobile-img-program-db" src={iconOracle}></img>
            <img className="mobile-img-program-db" src={iconOracle}></img>
            <img className="mobile-img-program-db" src={iconPostGreSql}></img>
          </div>
        </div>
        <div className="mobile-framework">
          <div className="mobile-framework-title">FRAMEWORKS</div>
          <div className="mobile-framework-lang-icon">
            <img className="mobile-img-program-db" src={iconAngular}></img>
            <img className="mobile-img-program-db" src={iconNode}></img>
            <img className="mobile-img-program-db" src={iconNest}></img>
            <img className="mobile-img-program-db" src={iconReact}></img>
            <img className="mobile-img-program-db" src={iconAspNet}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
