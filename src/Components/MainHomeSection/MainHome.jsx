import React from 'react'
import './MainHome.scss'
import google from '/Icons/IMAGE1.svg'
import apple from '/Icons/IMAGE.svg'
import london from '/Icons/IMAGE2.svg'
import glamour from '/Icons/IMAGE3.svg'
import courier from '/Icons/IMAGE4.svg'
import yahoo from '/Icons/IMAGE5.svg'
import finextra from '/Icons/IMAGE6.svg'
import featured from '/Icons/IMAGE7.svg'
import givingAway from '/Image/IMAGE1.png'
import mobile from '/Image/IMAGE3.png'
import girlImg from '/Image/IMAGE2.png'

import './MainHome.scss'

export default function MainHome() {
  return (
    <div className='MainHome'>
      <div className="conteiner">
        <div className='MainHome__leftSection'>
          <h1>Start building your first home deposit today</h1>
          <p>Open a Nude savings or investment account, boost your 
            deposit with government bonuses and get ideas to buy your home in record time.
          </p>
          <span>Already got a Lifetime ISA? Transferring to Nude only takes 5 minutes.</span>
          <span>Install Nude today and start the countdown to buying your first place.</span>
          <div className='MainHome__leftSection-btn'>
            <a href="https://googlplay.com/">  <img className='google' src={google}  alt="google" /></a>
            <a href="https://apple.com/"><img className='apple' src={apple} alt="apple" /></a>
          </div>
          <div className='brand_logo'>
            <img src={london} alt="london" />
            <img src={glamour} alt="glamour" />
            <img src={courier} alt="courier" />
            <img src={yahoo} alt="yahoo" />
            <img src={finextra} alt="finextra" />
            <img src={featured} alt="featured" />
          </div>
        </div>

          <div className='MainHome__centrSection'>
            <img src={givingAway} className='givingAway' alt="givingAway" />
            <img src={girlImg} className='girlImg' alt="girlImg" />
          </div>
          <div className='MainHome__rightSection'>
            <img src={mobile} className='mobile' alt="moble" />
          </div>
      </div>
    </div>
  )
}
