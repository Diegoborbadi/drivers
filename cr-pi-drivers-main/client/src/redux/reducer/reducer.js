import { GET_DRIVERS,
  GET_DRIVER_BY_ID,
  GET_FILTERS_ASCEND_DRIVERS,
  PAGINATE,GET_DRIVER_DETAIL } from "../actions/actions";

const initialState = {
    allDrivers: [],
    allDriversCopy:[],
    postDriver:[],
    allDriversDetail:[],
    allDriversAscenBuckUp:[],
    currentPage:0
  }
  
  const rootReducer = (state = initialState, action) => {
    const ITEMS_PER_PAGE = 9;
    switch (action.type) {
      case GET_DRIVERS: 
        return{
          ...state,
          allDrivers:[...action.payload].splice(0,ITEMS_PER_PAGE),
          allDriversCopy:action.payload
        }
        case GET_DRIVER_DETAIL:
          return{
            ...state,
            allDriversDetail:action.payload
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
          case PAGINATE:
            const next_page =state.currentPage + 1;
            const prev_page =state.currentPage - 1;
            const firstIndex = action.payload === "next" ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE

            if(action.payload === "next" && firstIndex >= state.allDriversCopy.length)return state
            else if ( action.payload === "prev" && prev_page < 0)return state
            return{
              ...state,
              allDrivers: [...state.allDriversCopy].splice(firstIndex,ITEMS_PER_PAGE),
              currentPage: action.payload === "next" ? next_page : prev_page 
            }
            default:
              return state;
    }
  }
  
  export default rootReducer;
  