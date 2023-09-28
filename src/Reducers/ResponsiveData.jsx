import { combineReducers } from "redux";
import { SET_WIDTH, SET_DESKTOP } from "../Actions/ResponsiveAction";

const initialState = {
  windowWidth: window.innerWidth,
  isDesktop: null,
};

const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WIDTH:
      return {
        ...state,
        windowWidth: action.payload,
      };
    case SET_DESKTOP:
      return {
        ...state,
        isDesktop: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  window: windowReducer,
});

export default rootReducer;
