import React, { useState } from 'react'
import './MainModal.scss'
import { comming } from './MainModale'
import Modal from './Modal/Modal'


export default function MainModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = ()=>{
    setIsOpen(!isOpen)

  }
  return (
      <div className='MainModal'>
      {isOpen ? (
        <Modal handleSubmit={handleSubmit}/>
      ) : (
          <div className="MainModal__card">
            {comming.map(elm => (
              <div className="MainModal__card-section" key={elm.id}>
                <h2>{elm.tittleName}</h2>
                <p className='MainModal__card-section-p1'>{elm.about}</p>
                <p className='MainModal__card-section-p2'>{elm.discription}</p>
                <button onClick={handleSubmit}>{elm.btn}</button>
              </div>
            ))}
          </div>
      )}
  </div>
  )
}









