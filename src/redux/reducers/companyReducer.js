import { FETCH_RESULT } from "../actions";

const initialState = {
  content: []
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULT:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default companyReducer;
