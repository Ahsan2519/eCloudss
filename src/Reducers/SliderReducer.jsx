import Slider from '../Data/Slider';
import { INCREMENT, DECREMENT } from '../Actions/SliderAction';

const initialState = {
  sliderDetails: Slider, 
  index: 0,
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        index: state.index >= state.sliderDetails.length - 1 ? 0 : state.index + 1,
      };
    case DECREMENT:
      return {
        ...state,
        index: state.index <= 0 ? state.sliderDetails.length - 1 : state.index - 1,
      };
    default:
      return state;
  }
};

export default sliderReducer;