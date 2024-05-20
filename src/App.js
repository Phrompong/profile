import './App.css';
import profile_image from './images/profile_image.png';
import Header from './components/header.js';

function App() {

  const nickName = "<CHOPPER>";


  return (
    <div className="App">
      {/* Header */ }
      <Header></Header>

      {/* Information */ }
      <div className='information'>
        <div className='information-left'>
          <div className='information-first-name'>PHROMPONG</div>
          <div className='information-group-last-name-nick-name'>
            <div className='information-last-name'>
              KHAGTES

            </div>
            <div className='information-nick-name'>{ nickName }</div>
          </div>
          <div className='information-position'>Full Stack  Developer</div>
          <span className='information-detail'>
            5 years experience in programmer.
            The scope of work includes Software development,
            Software structure design, Database management,
            Software testing for errors and debugging,
            Review the program regularly
            and make adjustments as necessary
            to ensure that it is functioning properly in accordance
            with current business
            and integrate new functions into existing applications.
          </span>
        </div>
        <div className='information-right'>
          <img src={ profile_image } className='information-image'></img>
        </div>
      </div>
    </div >
  );
}

export default App;
