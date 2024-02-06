import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDriverDetail } from '../../redux/actions/actions';
import "./detail.style.css";

const Detail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const driverDetail = useSelector((state)=>state.allDriversDetail);
  
  useEffect(()=>{
    dispatch(getDriverDetail(params.id));
    return () => {};
  },[]);

  return (
    <div className="container">
      <div className="driver-info">
        <h1>{driverDetail.name}</h1>
        <h2>{driverDetail.forname}</h2>
      </div>
      <div className="driver-image"><img src={driverDetail.image} alt="" /></div>
      <div className="driver-details">
        <label>{driverDetail.description}</label>
        <p></p>
        <label>{driverDetail.nationality}</label>
        <p></p>
        <label>{driverDetail.dob}</label>
        <p></p>
      </div>
    </div>
  );
}

export default Detail;
