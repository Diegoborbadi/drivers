import { GET_DRIVERS,GET_DRIVER_BY_ID,GET_FILTERS_ASCEND_DRIVERS } from "../actions/actions";

const initialState = {
    allDrivers: [],
    allDriversCopy:[],
    postDriver:[],
    allDriversAscenBuckUp:[]
  }
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DRIVERS: 
        return{
          ...state,
          allDrivers:action.payload,
          allDriversCopy:action.payload
        }
      case GET_DRIVER_BY_ID:
        return{
          ...state,
          allDrivers:action.payload
        }
        case GET_FILTERS_ASCEND_DRIVERS:
          const copyDrivers = [...state.allDrivers];
          return {
            ...state,
            allDrivers:
              action.payload === "ascendente"
                ? copyDrivers.sort((a, b) => a.name.localeCompare(b.name))
                : copyDrivers.sort((a, b) => b.name.localeCompare(a.name)),
          };
      default:
        return state;
    }
  }
  
  export default rootReducer;
  