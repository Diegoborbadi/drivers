import { GET_DRIVERS } from "../actions/actions";

const initialState = {
    allDrivers: [],
    allDriversCopy:[],
    postDriver:[]
  }
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DRIVERS: 
        return{
          ...state,
          allDrivers:action.payload,
          allDriversCopy:action.payload
        }
      default:
        return state;
    }
  }
  
  export default rootReducer;
  