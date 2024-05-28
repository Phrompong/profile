import "../my-project/my-project.css";
import jaew_logo from "../../images/jaew_logo.png";
import icon_view_site from "../../images/icon_view_site.png";

function MyProject() {
    return <>
        <div className="my-project">
            <div className="my-project-frame">
                <div className="container-text-in-border">
                    <div className="text-in-border">PROJECTS</div>
                </div>

                {/* Information */ }
                <div className="container-information">
                    <img
                        className="container-information-image"
                        src={ jaew_logo }>
                    </img>
                    <div className="container-information-project-name">
                        JAEW TRANSLATE
                    </div>
                    <div className="container-information-description">
                        พิมตั้งนานต่างดาวได้ไงให้แจ๋วช่วยเลย
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