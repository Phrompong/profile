import "../skill/skill.css";
import "../middle.css";

import iconTs from "../../images/skill/typescript.svg";
import iconJs from "../../images/skill/javascript.svg";
import iconCSharp from "../../images/skill/c-sharp.svg";
import iconSql from "../../images/skill/sql.svg";
import iconPhp from "../../images/skill/php.svg";
import iconSqlDB from "../../images/skill/sqlDB.svg";
import iconMySql from "../../images/skill/mysqlDB.svg";
import iconMongoDB from "../../images/skill/mongoDB.svg";
import iconOracle from "../../images/skill/oracle.svg";
import iconAngular from "../../images/skill/angular.svg";
import iconNode from "../../images/skill/nodejs.svg";
import iconNest from "../../images/skill/nestjs.svg";
import iconReact from "../../images/skill/reactjs.svg";
import iconAspNet from "../../images/skill/aspnet.svg";
import iconPostGreSql from "../../images/skill/postgreSQL.svg";
import iconNext from "../../images/skill/next.svg";
import iconReactNative from "../../images/skill/reactnative.svg";
import iconMapbox from "../../images/skill/mapbox.svg";
import iconTailwind from "../../images/skill/tailwind.svg";
import iconGit from "../../images/skill/git.svg";
import iconAntDesign from "../../images/skill/antdesign.svg";
import iconChartJs from "../../images/skill/chartjs.svg";
import iconJest from "../../images/skill/jest.svg";
import iconMocha from "../../images/skill/mocha.svg";
import iconRedis from "../../images/skill/redis.svg";
import iconRabbitMQ from "../../images/skill/rabbitmq.svg";
import iconDocker from "../../images/skill/docker.svg";

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
        <div className="all-skills-icon">
          <img className="img-program-db" src={iconTs}></img>
          <img className="img-program-db" src={iconJs}></img>
          <img className="img-program-db" src={iconCSharp}></img>
          <img className="img-program-db" src={iconSql}></img>
          <img className="img-program-db" src={iconPhp}></img>
          <img className="img-program-db" src={iconSqlDB}></img>
          <img className="img-program-db" src={iconMySql}></img>
          <img className="img-program-db" src={iconMongoDB}></img>
          <img className="img-program-db" src={iconOracle}></img>
          <img className="img-program-db" src={iconPostGreSql}></img>
          <img className="img-program-db" src={iconAngular}></img>
          <img className="img-program-db" src={iconNode}></img>
          <img className="img-program-db" src={iconNest}></img>
          <img className="img-program-db" src={iconReact}></img>
          <img className="img-program-db" src={iconAspNet}></img>
          <img className="img-program-db" src={iconNext}></img>
          <img className="img-program-db" src={iconReactNative}></img>
          <img className="img-program-db" src={iconMapbox}></img>
          <img className="img-program-db" src={iconTailwind}></img>
          <img className="img-program-db" src={iconGit}></img>
          <img className="img-program-db" src={iconAntDesign}></img>
          <img className="img-program-db" src={iconChartJs}></img>
          <img className="img-program-db" src={iconJest}></img>
          <img className="img-program-db" src={iconMocha}></img>
          <img className="img-program-db" src={iconRedis}></img>
          <img className="img-program-db" src={iconRabbitMQ}></img>
          <img className="img-program-db" src={iconDocker}></img>
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
        <div className="mobile-all-skills-icon">
          <img className="mobile-img-program-db" src={iconTs}></img>
          <img className="mobile-img-program-db" src={iconJs}></img>
          <img className="mobile-img-program-db" src={iconCSharp}></img>
          <img className="mobile-img-program-db" src={iconSql}></img>
          <img className="mobile-img-program-db" src={iconPhp}></img>
          <img className="mobile-img-program-db" src={iconSqlDB}></img>
          <img className="mobile-img-program-db" src={iconMySql}></img>
          <img className="mobile-img-program-db" src={iconMongoDB}></img>
          <img className="mobile-img-program-db" src={iconOracle}></img>
          <img className="mobile-img-program-db" src={iconPostGreSql}></img>
          <img className="mobile-img-program-db" src={iconAngular}></img>
          <img className="mobile-img-program-db" src={iconNode}></img>
          <img className="mobile-img-program-db" src={iconNest}></img>
          <img className="mobile-img-program-db" src={iconReact}></img>
          <img className="mobile-img-program-db" src={iconAspNet}></img>
          <img className="mobile-img-program-db" src={iconNext}></img>
          <img className="mobile-img-program-db" src={iconReactNative}></img>
          <img className="mobile-img-program-db" src={iconMapbox}></img>
          <img className="mobile-img-program-db" src={iconTailwind}></img>
          <img className="mobile-img-program-db" src={iconGit}></img>
          <img className="mobile-img-program-db" src={iconAntDesign}></img>
          <img className="mobile-img-program-db" src={iconChartJs}></img>
          <img className="mobile-img-program-db" src={iconJest}></img>
          <img className="mobile-img-program-db" src={iconMocha}></img>
          <img className="mobile-img-program-db" src={iconRedis}></img>
          <img className="mobile-img-program-db" src={iconRabbitMQ}></img>
          <img className="mobile-img-program-db" src={iconDocker}></img>
        </div>
      </div>
    </div>
  );
}

export default Skill;
