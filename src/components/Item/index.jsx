import React from 'react'

const Item = ({servicios}) => {
  return (
    <div className='cardI'>
        <h2>{servicios.name}</h2>
        <p>{servicios.description}</p>
        <p>{servicios.stock}</p>
    </div>
  )
}

export default Item