import './App.css';
import Header from './components/header/header.js';
import Information from "./components/information/information.js";
import Company from './components/company/company';

function App() {

  const nickName = "<CHOPPER>";


  return (
    <div className="App">
      {/* Header */ }
      <Header></Header>
      <Information></Information>
      <Company></Company>
    </div >
  );
}

export default App;
