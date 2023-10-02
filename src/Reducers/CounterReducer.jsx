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
    case INCREMENT_EXPERIENCE_COUNT:
    case INCREMENT_PROJECTS_COUNT:
      const customerIncrement = Math.min(state.customerCount + 136664 / 500, 136664);
      const experienceIncrement = Math.min(state.experienceCount + 3 / 500, 3);
      const projectsIncrement = Math.min(state.projectsCount + 136664 / 500, 136664);

      return {
        ...state,
        customerCount: parseFloat(customerIncrement.toFixed(2)),
        experienceCount: parseFloat(experienceIncrement.toFixed(2)),
        projectsCount: parseFloat(projectsIncrement.toFixed(2)),
      };
    default:
      return state;
  }
};

export default counterReducer;