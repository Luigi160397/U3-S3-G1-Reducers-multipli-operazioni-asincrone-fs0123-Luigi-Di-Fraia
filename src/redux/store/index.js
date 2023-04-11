import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesRerducer";
import companyReducer from "../reducers/companyReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
  company: companyReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
