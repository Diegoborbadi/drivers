import { useEffect, useState } from "react";
import{useDispatch,useSelector} from "react-redux"
import {getDrivers,orderAlfabeticamente,page} from "../../redux/actions/actions"
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
  
  const pagination=(event)=>{
    dispatch(page(event.target.name))
  }

  return (
    <div className="home-page">
      <div>
        <label>Paginado</label>
        <button name="prev" onClick={pagination}>Prev</button>
        <button name="next" onClick={pagination}>Next</button>
      </div>
      <button onClick={filterAscend}>Alfabeticamente</button>
      <Cards allDrivers={allDrivers}/>
    </div>
  );
}

export default Home;