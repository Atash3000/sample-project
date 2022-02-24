import { ON_FAIL, ON_REQUEST, ON_SUCCESS } from '../constants/main';

const initialState = {
  images: [],
  loading: false,
  error: null,
};

export const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_REQUEST:
      return { ...state, loading: true };
    case ON_SUCCESS:
      return { ...state, loading: false, images: action.payload };
    case ON_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
