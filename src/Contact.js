import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/whatsapp'


const Contact = () => {
  return (
    <div className='contact'>
      <Header/>
        <div className='contact-container'>
          <div className='about'>
            <div className='about-img'>
              <img src='images/ceo.png' alt='Ceo img'/>
            </div>
            <div className='about-text'>
              <p>Welcome to WaistLine, your ultimate destination for timeless style. Discover curated collections that blend elegance with trend-setting designs. </p>
            </div>
          </div>
          <div className='mail'>
            <div className='whatsapp'>
              <a href='/home'><SocialIcon target='_blank' url="https://www.whatsapp.com" bgColor="hsl(120, 92%, 10%)"  style={{width:'35px', height:'35px'}} /><button>Lets chat on whatsapp</button></a>
            </div>
            {/* <div className='mail-to'>
              
            </div> */}
            <form className='mail-to'>
              <input type='email' name='email' placeholder='enter your email address'/>
              <textarea placeholder='message here'/>
              <button id='send-mail' type='submit'>Send a Mail</button>
            </form>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact
