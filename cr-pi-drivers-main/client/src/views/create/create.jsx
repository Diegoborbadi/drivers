import React from 'react'
import {useDispatch} from "react-redux"
import { postDriver } from '../../redux/actions/actions'
const Create = () => {
 
  const dispatch = useDispatch()
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(postDriver(dispatch))
  }
 
  return (
  <div>
    <form onSubmit={handleSubmit} >
      <input type="text" name='name'  placeholder='name'/>
      <input type="text" name='forename' placeholder='forename' />
      <input type="text" name='description' placeholder='description' />
      <input type="text" name='img' placeholder='img' />
      <input type="text" name='nationality' placeholder='nationality' />
      <input type="text" name='dob'  placeholder='dob' />
    <input type="submit" />
    </form>
  </div>

  )
}

export default Create
