import React from 'react'
import waveImg from '/Image/Vector.png'
import './MainSecond.scss'
import MainSlider from '../MainSecondSlider/MainSlider'
import MainMobile from '../MainMobileSection/MainMobile'

export default function MainSecond() {

  return (
      <div className='MainSecond'>
        <img className ='waveImg' src={waveImg} alt="" />
        <MainSlider/>
        <MainMobile/>
      </div>
    

  )
}
