import React, { useEffect } from 'react'
import './ModalConnect.scss'

export default function ModalConnect({ children, toggleModal }) {
  useEffect(() => {
    const closeToggleModal = (e)=>{
      if(e.target.className === 'ModalConnect'){
        toggleModal()
      }
    }
    window.addEventListener('click',closeToggleModal)
    return () => {
      window.removeEventListener('click',closeToggleModal)

    }
  }, [])

  return (
    <div className='ModalConnect'>
      <div className="ModalConnect__content">
        <p>Our number: +374 94 94-94-94</p>
        <p>Our email: NudeExample@gmail.com</p>
        <p>Our address: Eravan Amiryan 99</p>
        <span onClick={toggleModal}>X</span>
        {children}
      </div>
    </div>
  )
}
