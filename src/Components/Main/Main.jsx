import React from 'react'
import MainHome from '../MainHomeSection/MainHome'
import MainSecond from '../MainSecondSection/MainSecond'
import MainBuyers from '../MainBuyersSection/MainBuyers'
import MainModal from '../MainModalSection/MainModal'
import MainUnpac from '../MainUnpacSection/MainUnpac'
import MainFooter from '../MainFooterSection/MainFooter'



export default function Main() {
  return (
    <div className='Main'>
      <div className="conteiner">
        <MainHome/>
        <MainSecond/>
        <MainBuyers/>
        <MainModal/>
        <MainUnpac/>
        <MainFooter/>
      </div>
     
    </div>
   
  )
}
