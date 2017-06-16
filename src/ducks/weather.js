import { buildURL, formatWeatherData } from '../utils/weatherUtils';
import axios from 'axios';


const initialState = {
  error: false,
  loading: false,
  search: true,
  weather: {}
};

export function setWeather(location) {
  return {
    type: SET_WEATHER,
    payload: axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appId=a63d80228472b3e7ca43a0febdf84efd`)
      .then ((payload) => payload.data)
  }
}

const RESET = "RESET";
const SET_WEATHER = 'SET_WEATHER'

export default  function weather( state = initialState, action ) {
  switch ( action.type ) {
    case RESET: return initialState;
    case SET_WEATHER + '_FULFILLED':
      return {
        error: false,
        loading: false,
        search: false,
        weather: action.payload
      }
      
    case SET_WEATHER +'_REJECTED':
      break;
    default: return state;
  }
}

export function reset() {
  return { type: RESET };
}
