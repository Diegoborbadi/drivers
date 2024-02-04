import { useEffect, useState } from "react";
import{useDispatch,useSelector} from "react-redux"
import {getDrivers} from "../../redux/actions/actions"
import Cards from "../../components/cards/cards";
import "./home.style.css"


const Home = () => {
  const dispatch = useDispatch()
  const allDrivers = useSelector((state)=>state.allDrivers)
  useEffect(()=>{
    dispatch(getDrivers())
  },[dispatch])

  return (
    <div className="home-page">
      <Cards allDrivers={allDrivers}/>
    </div>
  );
}

export default Home;