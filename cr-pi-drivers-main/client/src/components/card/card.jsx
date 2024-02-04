  import React from 'react';
  import "./card.style.css"
  
  const Card = ({driver}) => {
    const{name,image} = driver;
    return (
      <div className='card-container'>
        <img src={image} alt={image} />
        <h2>{name}</h2>
      </div>
    );
  }

  export default Card;