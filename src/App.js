import './App.css';
import Header from './components/header/header.js';
import Information from "./components/information/information.js";
import Company from './components/company/company';
import Skill from "./components/skill/skill";
import Experience from './components/experiences/experience';
import MyProject from './components/my-project/my-project';
import { useRef, useState } from 'react';
import Footer from './components/footer/footer';

function App() {

  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const informationRef = useRef(null);
  const contactRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={ isDarkMode ? "App-dark-mode" : "App" }>
      <Header
        informationRef={ informationRef }
        skillRef={ skillRef }
        experienceRef={ experienceRef }
        contactRef={ contactRef }
        handleDarkMode={ handleDarkMode }
        isDarkMode={ isDarkMode }
      ></Header>
      <Information
        informationRef={ informationRef }
        isDarkMode={ isDarkMode }>
      </Information>
      <Company></Company>
      <Skill
        skillRef={ skillRef }
        isDarkMode={ isDarkMode }
      ></Skill>
      <Experience
        experienceRef={ experienceRef }
        isDarkMode={ isDarkMode }
      ></Experience>
      <MyProject isDarkMode={ isDarkMode }></MyProject>
      <Footer contactRef={ contactRef }></Footer>
    </div >
  );
}

export default App;
