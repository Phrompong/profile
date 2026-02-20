import "../company/company.css";
import logoCSI from "../../images/company/Logo_CSIGROUP.svg";
import logoFusion from "../../images/company/fusionsol_logo.svg";
import logoPtt from "../../images/company/logo_ptt.svg";
import logoTN from "../../images/company/logo_TN.svg";
import logoBedrock from "../../images/company/logo_bedrock_company.svg";
import logoBedrockDark from "../../images/company/logo_bedrock_company_dark.svg";

function Company({ isDarkMode }) {
  return (
    <>
      <div className="company">
        <img src={logoCSI} className="company-image" alt="C.S.I. GROUP"></img>
        <div className="company-vertical-line"></div>

        <img src={logoFusion} className="company-image" alt="Fusion Solution"></img>
        <div className="company-vertical-line"></div>

        <img src={logoPtt} className="company-image" alt="PTT Digital Solutions"></img>
        <div className="company-vertical-line"></div>

        <img src={logoTN} className="company-image" alt="TN Incorporation"></img>
        <div className="company-vertical-line"></div>

        <img src={isDarkMode ? logoBedrockDark : logoBedrock} className="company-image" alt="Bedrock Analytics"></img>
      </div>
    </>
  );
}

export default Company;
