
import weatherapi from '../API/weatherapi'

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => async dispatch => {
  const API_KEY = "e1c46eb81236a95c36875164d093b714";
  const response =  await weatherapi.get(`/forecast?appid=${API_KEY}&q=${city},ca`);

  dispatch({
    type: FETCH_WEATHER,
    payload: response
  });
}