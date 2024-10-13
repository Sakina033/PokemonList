import React from 'react'
import './PokemonCard.css'

const PokemonCard = ({name, image}) => {
  return (
    <div className='PokemonCard'>
        <img src={image} alt={name} />
        <h3>{name}</h3>
    </div>
  )
}

export default PokemonCard;