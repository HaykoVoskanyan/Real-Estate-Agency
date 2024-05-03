import React, { useEffect } from 'react'
import './Modal.scss'

export default function Modal({ children, handleSubmit }) {
  useEffect(() => {
    const closeModal = (e) => {
      if (e.target.className === 'Modal') {
        handleSubmit();
      }
    };
    window.addEventListener('click', closeModal);
    return () => {
      window.removeEventListener('click', closeModal);
    };
  }, [handleSubmit]);
  
  return (
    <div className='Modal'>
      <div className="Modal__content">
        <span onClick={handleSubmit}>X</span>
        <h1>Home Buyers</h1>
        <p>
          Real estate is property consisting of land and the buildings on it, along with its natural resources such as growing crops (e.g. timber), minerals or water, and wild animals; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.[1][2] In terms of law, real relates to land property and is different from personal property while estate means the "interest" a person has in that land property.[3]
          Real estate is different from personal property, which is not permanently attached to the land (or comes with the land), such as vehicles, boats, jewelry, furniture, tools, and the rolling stock of a farm and farm animals.
          In the United States, the transfer, owning, or acquisition of real estate can be through business corporations, individuals, nonprofit corporations, fiduciaries, or any legal entity as seen within the law of each U.S. state.[3]
        </p>
        <h3>As an investment</h3>
        <p>In markets where land and building prices are rising, real estate is often purchased as an investment, whether or not the owner intends to use the property. Often investment properties are rented out, but "flipping" involves quickly reselling a property, sometimes taking advantage of arbitrage or quickly rising value, and sometimes after repairs are made that substantially raise the value of the property.</p>
        {children}
      </div>
    </div>
  )
}
