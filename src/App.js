import './App.css';

function App() {
  const headers = [
    "<Home>",
    "<Skills>",
    "<Experience>",
    "<Contact>"
  ]
  const nickName = "<CHOPPER>";


  return (
    <div className="App">
      {/* Header */ }
      <div className='header'>
        <div className='header-list'>
          { headers.map((o, index) => (
            < div > { o }</div>
          )) }
        </div>
      </div>

      {/* Information */ }
      <div className='information'>
        <div className='information-first-name'>PHROMPONG</div>
        <div className='information-first-name'></div>
        <div className='information-group-last-name-nick-name'>
          <div className='information-last-name'>KHAGTES</div>
          <div className='information-nick-name'>{ nickName }</div>
        </div>
      </div>
    </div >
  );
}

export default App;
