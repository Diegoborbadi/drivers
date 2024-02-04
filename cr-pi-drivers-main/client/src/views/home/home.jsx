import { useEffect, useState } from "react";
import{useDispatch,useSelector} from "react-redux"
import {getDrivers,orderAlfabeticamente} from "../../redux/actions/actions"
import Cards from "../../components/cards/cards";
import "./home.style.css"


const Home = () => {
  
  const dispatch = useDispatch()
  const allDrivers = useSelector((state)=>state.allDrivers)
  
  
  useEffect(()=>{
    dispatch(getDrivers())
  },[dispatch])

  const filterAscend = () => {
    dispatch(orderAlfabeticamente("ascendente"));
  };
 
  return (
    <div className="home-page">
      <button onClick={filterAscend}>Alfabeticamente</button>
      <Cards allDrivers={allDrivers}/>
    </div>
  );
}

export default Home;