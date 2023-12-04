import qrImage from './assets/images/image-qr-code.png'

import './App.css'

function App() {

  return (
    <>
      <div className='mainContainer'>
        <div className="cardContainer">
          <div className='qrContainer'>
            <img src={qrImage} alt="" />
          </div>
          <div className='titleContainer'>
            <h3>Improve your front-end skills by building projects</h3>
          </div>
          <div className='descriptionContainer'>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aiyangar">Gustavo A. Cárdenas</a>.
      </div>
    </>
  )
}

export default App
