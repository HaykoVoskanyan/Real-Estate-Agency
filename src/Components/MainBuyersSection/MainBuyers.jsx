import React from 'react'
import footerWave from '/Image/IMAGE8.png'
import './MainBuyers.scss'


export default function MainBuyers() {
  return (
     <div className='MainBuyers'>
        <img src={footerWave} alt="Wave" />
        <div className='MainBuyers__title'>
            <span>A place to grow your first home fund</span>
            <strong>Accounts for first-time home buyers</strong>
        </div>

    </div>
  )
}
