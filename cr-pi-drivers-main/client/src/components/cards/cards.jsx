import React from 'react';
import Card from '../card/card';
import "./cards.style.css"


const Cards = ({allDrivers}) => {
  const driverList = allDrivers
  return (
    <div className='cards-list'>
      {driverList?.map((driver)=>(<Card key={driver.id} driver={driver} id={driver.id}/>))}
    </div>
  );
}
export default Cards;