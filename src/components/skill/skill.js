import "../skill/skill.css";
import "../middle.css";

import iconTs from "../../images/typescript.png";
import iconJs from "../../images/javascript.png";
import iconCSharp from "../../images/c-sharp.png";
import iconSql from "../../images/sql.png";
import iconPhp from "../../images/php.png";
import iconSqlDB from "../../images/sqlDB.png";
import iconMySql from "../../images/mysqlDB.png";
import iconMongoDB from "../../images/mongoDB.png";
import iconOracle from "../../images/oracle.png";
import iconAngular from "../../images/angular.png";
import iconNode from "../../images/nodejs.png";
import iconNest from "../../images/nestjs.png";
import iconReact from "../../images/reactjs.png";
import iconAspNet from "../../images/aspnet.png";

function Skill({ skillRef, isDarkMode }) {
    return (
        <div ref={ skillRef } className="container-skill">
            <div className={ isDarkMode ? "skill-topic-dark-mode fire" : "skill-topic fire" }>
                SKILLS
            </div>
            <div className="skill">
                <div className="program-lang">
                    <span className="program-lang-title">
                        PROGRAMMING LANGUAGES
                    </span>
                    <div className="program-lang-icon">
                        <img className="img-program-db" src={ iconTs }></img>
                        <img className="img-program-db" src={ iconJs }></img>
                        <img className="img-program-db" src={ iconCSharp }></img>
                        <img className="img-program-db" src={ iconSql }></img>
                        <img className="img-program-db" src={ iconPhp }></img>
                    </div>
                </div>
                <div className="program-lang">
                    <span className="database-title">
                        DATABASE
                    </span>
                    <div className="program-lang-icon">
                        <img className="img-program-db" src={ iconSqlDB }></img>
                        <img className="img-program-db" src={ iconMySql }></img>
                        <img className="img-program-db" src={ iconMongoDB }></img>
                        <img className="img-program-db" src={ iconOracle }></img>
                    </div>
                </div>
                <div className="framework">
                    <div className="framework-title">
                        FRAMEWORKS
                    </div>
                    <div className="framework-lang-icon">
                        <img className="img-program-db" src={ iconAngular }></img>
                        <img className="img-program-db" src={ iconNode }></img>
                        <img className="img-program-db" src={ iconNest }></img>
                        <img className="img-program-db" src={ iconReact }></img>
                        <img className="img-program-db" src={ iconAspNet }></img>
                    </div>
                </div>
            </div >

            {/* Mobile */ }
            <div ref={ skillRef } className={ isDarkMode ? "mobile-skill-topic-dark-mode" : "mobile-skill-topic" }>
                SKILLS
            </div>
            <div className="mobile-skill">
                <div className="mobile-program-lang">
                    <span className="mobile-program-lang-title">
                        PROGRAMMING LANGUAGES
                    </span>
                    <div className="mobile-program-lang-icon">
                        <img className="mobile-img-program-db" src={ iconTs }></img>
                        <img className="mobile-img-program-db" src={ iconJs }></img>
                        <img className="mobile-img-program-db" src={ iconCSharp }></img>
                        <img className="mobile-img-program-db" src={ iconSql }></img>
                        <img className="mobile-img-program-db" src={ iconPhp }></img>
                    </div>
                </div>
                <div className="mobile-program-lang">
                    <span className="mobile-database-title">
                        DATABASE
                    </span>
                    <div className="mobile-program-lang-icon">
                        <img className="mobile-img-program-db" src={ iconSqlDB }></img>
                        <img className="mobile-img-program-db" src={ iconMySql }></img>
                        <img className="mobile-img-program-db" src={ iconMongoDB }></img>
                        <img className="mobile-img-program-db" src={ iconOracle }></img>
                    </div>
                </div>
                <div className="mobile-framework">
                    <div className="mobile-framework-title">
                        FRAMEWORKS
                    </div>
                    <div className="mobile-framework-lang-icon">
                        <img className="mobile-img-program-db" src={ iconAngular }></img>
                        <img className="mobile-img-program-db" src={ iconNode }></img>
                        <img className="mobile-img-program-db" src={ iconNest }></img>
                        <img className="mobile-img-program-db" src={ iconReact }></img>
                        <img className="mobile-img-program-db" src={ iconAspNet }></img>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Skill;