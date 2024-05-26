import './App.css';
import Header from './components/header/header.js';
import Information from "./components/information/information.js";
import Company from './components/company/company';
import Skill from "./components/skill/skill";
import Experience from './components/experiences/experience';

function App() {

  return (
    <div className="App">
      {/* Header */ }
      <Header></Header>
      <Information></Information>
      <Company></Company>
      <Skill></Skill>
      <Experience></Experience>
    </div >
  );
}

export default App;
