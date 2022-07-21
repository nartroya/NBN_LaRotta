import React, { useState }  from 'react'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greeting}) => {
  
  return (
    <>
      <div>
          <h1>{greeting}</h1>
      </div>
      <ItemCount stock={5}/>
    </>  
  )
}

export default ItemListContainer