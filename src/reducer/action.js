import axios from "axios";
import * as ActionType from "./constants";
const api = axios.create({
  baseURL: "https://hn.algolia.com/api/",
});
export const apiFetch = () => {
  return (dispatch) => 
    api
      .get("v1/search?query=react")
      .then((result) => {
        dispatch(apiFetchSuccess(result.data));
      })
      .catch((error) => {
        dispatch(apiFetchError(error));
      });
  
};
const apiFetchSuccess = (data) => {
  return {
    type: ActionType.SUCCESS,
    payload: data,
  };
};
const apiFetchError = (err) => {
  return {
    type: ActionType.ERROR,
    payload: [],
  };
};
