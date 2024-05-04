import React, { useState } from 'react'
import './Contact.scss'
import ModalConnect from './ModalConnect/ModalConnect'

export default function Connect() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = ()=>{
    setIsModalOpen(!isModalOpen)
  }

  return (
    isModalOpen ? <ModalConnect toggleModal={toggleModal}/> : (
       <div className='Connect'>
      <div className="conteiner">
       <div className="Connect__section">
        <div className="Connect__section-title">
          <h4>Contact us</h4>
          <p> We’re receiving a high number of calls at the moment, which means it might take longer than we'd like for you to get through.</p>
          <p>To help us support those who are in most urgent need, please check if our help centre has the information you need before calling us.</p>
          <p>We know waiting to get through can be frustrating, and we're trying to help people as quickly as we can. Thanks for your patience and understanding.</p>
        </div>
        <div className="Connect__section-title2">
          <h4>Other ways to get in touch</h4>
          <p>alk to us directly through social channels too. All of our genuine accounts have a verified tick or badge. We’ll never ask for your Telephone or Online Banking passcodes, PINs (including PINsentry) or card details. Please be aware of accounts imitating us under other names, or without our verified tick.</p>
          <p>Apple user? Talk to us on Apple messages. Our genuine account has a black tick - so to make sure it's us you are talking to click on the 'l' next to our name and you'll see a verified tick and our official website 'barclays.co.uk'.</p>
          <div className="span__div">
          <span> Message us at any time using ‘Contact us’ in your Barclays app or ‘Help and Support’ in Online Banking.</span>
          <span>Messages are secure and our automated digital assistant is on hand to help 24 hours a day, 7 days a week. If you need more help, one of our team can also reply between 7am and 11pm.</span>
          </div>
          <div className="connect__us" onClick={toggleModal}>Connect</div>
        </div>
       </div>
      </div>
    </div>
    )
   
  )
}
