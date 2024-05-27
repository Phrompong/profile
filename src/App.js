import './App.css';
import Header from './components/header/header.js';
import Information from "./components/information/information.js";
import Company from './components/company/company';
import Skill from "./components/skill/skill";
import Experience from './components/experiences/experience';
import { useRef } from 'react';
import Footer from './components/footer/footer';

function App() {

  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const informationRef = useRef(null);

  return (
    <div className="App">
      <Header
        informationRef={ informationRef }
        skillRef={ skillRef }
        experienceRef={ experienceRef }></Header>

      <Information informationRef={ informationRef }></Information>
      <Company></Company>
      <Skill skillRef={ skillRef }></Skill>
      <Experience experienceRef={ experienceRef }></Experience>
      <Footer></Footer>
    </div >
  );
}

export default App;
