import { ON_FAIL, ON_REQUEST, ON_SUCCESS } from '../constants/main';

export const getData = () => async (dispatch) => {
  dispatch({
    type: ON_REQUEST,
    payload: null,
  });
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await response.json();
    dispatch({
      type: ON_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ON_FAIL,
      payload: err.message ? err.message : err.response ? err.response : err,
    });
  }
};
