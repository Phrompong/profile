import "../company/company.css";
import logoCSI from "../../images/Logo_CSIGROUP.svg";
import logoFusion from "../../images/fusionsol_logo.svg";
import logoPtt from "../../images/logo_ptt.svg";
import logoTN from "../../images/logo_TN.svg";

function Company() {
  return (
    <>
      <div className="company">
        <img src={logoCSI} className="company-image"></img>
        <div className="company-vertical-line"></div>

        <img src={logoFusion} className="company-image"></img>
        <div className="company-vertical-line"></div>

        <img src={logoPtt} className="company-image"></img>
        <div className="company-vertical-line"></div>

        <img src={logoTN} className="company-image"></img>
      </div>
    </>
  );
}

export default Company;
