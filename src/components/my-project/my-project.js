import "../my-project/my-project.css";
import jaew_logo from "../../images/jaew_logo.png";
import icon_view_site from "../../images/icon_view_site.png";


function MyProject({ isDarkMode }) {
    return <>
        <div className="my-project">
            <div className={ isDarkMode ? "my-project-frame-dark-mode" : "my-project-frame" }>
                <div className="container-text-in-border">
                    <div className={ isDarkMode ? "text-in-border-dark-mode" : "text-in-border" }>PROJECTS</div>
                </div>

                <div className="container-text-in-border">
                    <div className={ isDarkMode ? "mobile-text-in-border-dark-mode" : "mobile-text-in-border" }>PROJECTS</div>
                </div>

                {/* Information */ }
                <div className="container-information">
                    <img
                        className="container-information-image"
                        src={ jaew_logo }>
                    </img>
                    <div className={ isDarkMode ? "container-information-project-name-dark-mode" : "container-information-project-name" }>
                        JAEW TRANSLATE
                    </div>
                    <div className={ isDarkMode ? "container-information-description-dark-mode" : "container-information-description" }>
                        {/* พิมตั้งยาวต่างดาวได้ไงให้แจ๋วช่วยเลย */ }
                    </div>
                    <a href="https://jaewtranslate.com/">
                        <button
                            className="container-information-button">
                            <div className="container-information-button-text">
                                Visit Website
                            </div>
                            <div className="container-information-button-text">
                                <img className="container-information-button-icon"
                                    src={ icon_view_site }></img>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default MyProject