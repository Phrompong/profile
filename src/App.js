import './App.css';
import profile_image from './images/profile_image.png';

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
          { headers.map((o) => (
            < div > { o }</div>
          )) }
        </div>
      </div>

      {/* Information */ }
      <div className='information'>
        <div className='information-left'>
          <div className='information-first-name'>PHROMPONG</div>
          <div className='information-group-last-name-nick-name'>
            <div className='information-last-name'>
              KHAGTES

            </div>
            {/* <div className='information-nick-name'>{ nickName }</div> */ }
          </div>
          <div className='information-position'>Full Stack  Developer</div>
          <p className='information-detail'>
            5 years experience in programmer.
            The scope of work includes Software development,
            Software structure design, Database management,
            Software testing for errors and debugging,
            Review the program regularly
            and make adjustments as necessary
            to ensure that it is functioning properly in accordance
            with current business
            and integrate new functions into existing applications.
          </p>
          <div className='information-contact'>
            Full Stack  Developer
          </div>
        </div>
        <div className='information-right'>
          {/* <img src={ profile_image } className='information-image'></img> */ }
        </div>
      </div>
    </div >
  );
}

export default App;
