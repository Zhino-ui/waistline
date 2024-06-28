import React from 'react'
import Header from './Header'
import Footer from './Footer'


const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <div className='home-container'>
        <div className='home-text'>
          <h1 id='h1'>Dress to Impress, not to Fit in.</h1>
          <p>Let your style be the voice that echoes your confidence and individuality.</p>
        </div>
        
        <div className='home-images'>
          <div className='home-image'>
            <img src='images/pic3.jpg'alt='exhibition pictures here'/>
          </div>
          <div className='home-image'>
            <img src='images/pic2.jpg' alt='exhibition pictures here'/>
          </div>
          <div className='home-image'>
            <img src='images/pic1.jpg'alt='exhibition pictures here'/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
