import React from 'react';
import Card from '../card/card';
import "./cards.style.css"


const Cards = ({allDrivers}) => {
  const driverList = allDrivers
  return (
    <div className='cards-list'>
      {driverList?.map((driver)=>(<Card driver={driver}/>))}
    </div>
  );
}
export default Cards;