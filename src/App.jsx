import "./App.css";
import Header from "./components/header/header.jsx";
import Information from "./components/information/information.jsx";
import Company from "./components/company/company.jsx";
import Skill from "./components/skill/skill.jsx";
import Experience from "./components/experiences/experience.jsx";
import MyProject from "./components/my-project/my-project.jsx";
import { useRef, useState } from "react";
import Footer from "./components/footer/footer.jsx";

function App() {
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const informationRef = useRef(null);
  const contactRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App-dark-mode" : "App"}>
      <Header
        informationRef={informationRef}
        skillRef={skillRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
        handleDarkMode={handleDarkMode}
        isDarkMode={isDarkMode}
      ></Header>
      <Information
        informationRef={informationRef}
        isDarkMode={isDarkMode}
      ></Information>
      <Company></Company>
      <Skill skillRef={skillRef} isDarkMode={isDarkMode}></Skill>
      <Experience
        experienceRef={experienceRef}
        isDarkMode={isDarkMode}
      ></Experience>
      <Footer contactRef={contactRef}></Footer>
    </div>
  );
}

export default App;
