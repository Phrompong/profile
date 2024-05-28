import './App.css';
import Header from './components/header/header.js';
import Information from "./components/information/information.js";
import Company from './components/company/company';
import Skill from "./components/skill/skill";
import Experience from './components/experiences/experience';
import MyProject from './components/my-project/my-project';
import { useRef } from 'react';
import Footer from './components/footer/footer';

function App() {

  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const informationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header
        informationRef={ informationRef }
        skillRef={ skillRef }
        experienceRef={ experienceRef }
        contactRef={ contactRef }
      ></Header>

      <Information informationRef={ informationRef }></Information>
      <Company></Company>
      <Skill skillRef={ skillRef }></Skill>
      <Experience experienceRef={ experienceRef }></Experience>
      <MyProject></MyProject>
      <Footer contactRef={ contactRef }></Footer>
    </div >
  );
}

export default App;
