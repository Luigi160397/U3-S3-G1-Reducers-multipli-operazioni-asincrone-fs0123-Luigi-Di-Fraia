export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const DELETE_FROM_FAVOURITE = "DELETE_FROM_FAVOURITE";
export const FETCH_RESULT = "FETCH_RESULT";

export const addToFavouriteAction = data => ({ type: ADD_TO_FAVOURITE, payload: data });
export const removeFromFavouriteAction = index => ({ type: DELETE_FROM_FAVOURITE, payload: index });

export const getCompanyAction = params => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_RESULT, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsAction = query => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_RESULT, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
