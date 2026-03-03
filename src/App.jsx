import "./App.css";
import Header from "./components/header/header.jsx";
import Information from "./components/information/information.jsx";
import Company from "./components/company/company.jsx";
import Skill from "./components/skill/skill.jsx";
import Experience from "./components/experiences/experience.jsx";
import MyProject from "./components/my-project/my-project.jsx";
import { useRef, useState } from "react";
import Footer from "./components/footer/footer.jsx";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>(APP) Phrompong Khagtes | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Phrompong Khagtes, a Full Stack Developer with over 7 years of experience in software development, system architecture design, and database management." />
        <meta property="og:title" content="Phrompong Khagtes | Full Stack Developer app jsx" />
        <meta property="og:description" content="Portfolio of Phrompong Khagtes, a Full Stack Developer with over 7 years of experience in software development, system architecture design, and database management." />
        <meta property="og:image" content="/profile_image.svg" />
      </Helmet>
      <Header
        informationRef={informationRef}
        skillRef={skillRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
        handleDarkMode={handleDarkMode}
        isDarkMode={isDarkMode}
      />
      <Information
        informationRef={informationRef}
        isDarkMode={isDarkMode}
      />
      <Company isDarkMode={isDarkMode} />
      <Skill skillRef={skillRef} isDarkMode={isDarkMode} />
      <Experience
        experienceRef={experienceRef}
        isDarkMode={isDarkMode}
      />
      <Footer contactRef={contactRef} />
    </div>
  );
}

export default App;
