import { FETCH_RESULT, RESET_RESULT } from "../actions";

const initialState = {
  content: []
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULT:
      return {
        ...state,
        content: action.payload
      };
    case RESET_RESULT:
      return initialState;
    default:
      return state;
  }
};

export default jobsReducer;
