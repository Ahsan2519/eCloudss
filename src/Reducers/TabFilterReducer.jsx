import { SET_ACTIVE_TAB } from "../Actions/TabFilterAction";

const initialState = {
    activeTab: 0,
  };

  const TabFilterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ACTIVE_TAB:
        return {
          ...state,
          activeTab: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default TabFilterReducer;