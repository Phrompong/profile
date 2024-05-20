import './App.css';
import Header from './components/header/header.js';
import Information from "./components/information/information.js";
import Company from './components/company/company';
import Skill from "./components/skill/skill";

function App() {

  return (
    <div className="App">
      {/* Header */ }
      <Header></Header>
      <Information></Information>
      <Company></Company>
      <Skill></Skill>
    </div >
  );
}

export default App;
