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
      const customerIncrement = Math.min(state.customerCount + action.payload / 500, action.payload);
      return {
        ...state,
        customerCount: parseFloat(customerIncrement.toFixed(2)),
      };

    case INCREMENT_EXPERIENCE_COUNT:
      const experienceIncrement = Math.min(state.experienceCount + action.payload / 500, action.payload);
      return {
        ...state,
        experienceCount: parseFloat(experienceIncrement.toFixed(2)),
      };

    case INCREMENT_PROJECTS_COUNT:
      const projectsIncrement = Math.min(state.projectsCount + action.payload / 500, action.payload);
      return {
        ...state,
        projectsCount: parseFloat(projectsIncrement.toFixed(2)),
      };

    default:
      return state;
  }
};

export default counterReducer;
