import React from 'react'
import waveImg from '/Image/Vector.png'
import './MainSecond.scss'
import MainSlider from '../MainSecondSlider/MainSlider'
import MainMobile from '../MainMobileSection/MainMobile'

export default function MainSecond() {

  const backTopSlick = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }
  return (
    <>
      <button className="button" onClick={backTopSlick}> 
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
      <div className='MainSecond'>
        <img className ='waveImg' src={waveImg} alt="" />
        <MainSlider/>
        <MainMobile/>
      </div>
    </>
    

  )
}
