import './App.css';
import Header from './components/header/header.js';
import Information from "./components/information/information.js";

function App() {

  const nickName = "<CHOPPER>";


  return (
    <div className="App">
      {/* Header */ }
      <Header></Header>
      <Information></Information>
    </div >
  );
}

export default App;
