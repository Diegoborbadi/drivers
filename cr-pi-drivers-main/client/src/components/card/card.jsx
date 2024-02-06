  import React from 'react';
  import {Link} from "react-router-dom"
  import "./card.style.css"
  
  const Card = ({ driver, id }) => {
    const { name, image } = driver;
    return (
      <div className='card-container'>
        <img src={image} alt={image} />
        <Link to={`/drivers/${id}`}><h2>{name}</h2></Link>
      </div>
    );
  }

  export default Card;