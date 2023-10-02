import {
    INCREMENT_CUSTOMER_COUNT,
    INCREMENT_EXPERIENCE_COUNT,
    INCREMENT_PROJECTS_COUNT,
  } from '../Actions/CounterAction';
  
  const initialState = {
    customerCount: 0,
    experienceCount: 0,
    projectsCount: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT_CUSTOMER_COUNT:
        return {
          ...state,
          customerCount: Math.min(state.customerCount + 800, 136664),
        };
      case INCREMENT_EXPERIENCE_COUNT:
        return {
          ...state,
          experienceCount: Math.floor(state.experienceCount + (800/200), 3).toFixed(2),
        };
      case INCREMENT_PROJECTS_COUNT:
        return {
          ...state,
          projectsCount: Math.min(state.projectsCount + 800, 136664),
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;