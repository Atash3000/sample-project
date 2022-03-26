import { useReducer, useEffect } from 'react';
const initialState = {
  data: [],
  image: '',
  error: null,
  isLoading: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'ON_REQUEST':
      return { ...state, loading: true };
    case 'ON_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        image: action.image,
      };
    case 'ON_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export function useGetData(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: 'ON_REQUEST' });
      try {
        const dataFromServer = await fetch(url);
        const json = await dataFromServer.json();
        dispatch({
          type: 'ON_SUCCESS',
          payload: json.message,
          image: json.image,
        });
      } catch (err) {
        console.log('err', err);
        dispatch({
          type: 'ON_FAIL',
          payload: err.message
            ? err.message
            : err.response
            ? err.response
            : err,
        });
      }
    }

    fetchData();
  }, []);

  return { state };
}
