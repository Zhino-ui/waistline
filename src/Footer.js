import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/vimeo'
import 'react-social-icons/twitter'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/pinterest'
import 'react-social-icons/mailto'
import 'react-social-icons/tiktok'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socials'>
        <a href='#'><SocialIcon target='_blank' url="https://www.instagram.com" bgColor="#000" fgColor='#8a2829' style={{width:'20px', height:'20px'}} /></a>
        <a href='#'><SocialIcon target='_blank' url="https://www.pinterest.com" bgColor="#000" fgColor='#8a2829' style={{width:'20px', height:'20px'}} /></a>
        <a href='#'><SocialIcon target='_blank' url="https://www.facebook.com" bgColor="#000" fgColor='#8a2829' style={{width:'20px', height:'20px'}} /></a>
        <a href='#'><SocialIcon target='_blank' url="https://www.tiktok.com" bgColor="#000" fgColor='#8a2829' style={{width:'20px', height:'20px'}} /></a>
        <a href='#'><SocialIcon target='_blank' url="https://www.twitter.com" bgColor="#000" fgColor='#8a2829' style={{width:'20px', height:'20px'}} /></a>
      </div>
      <div className='copyright'>
        <h3>WaistLine &copy; 2024</h3>
      </div>
    </div>
  )
}

export default Footer
