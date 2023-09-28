export const SET_WIDTH = 'SET_WIDTH';
export const SET_DESKTOP = 'SET_DESKTOP'

export const setWindowWidth = (width) => {
  return {
    type: SET_WIDTH,
    payload: width,
  };
};

export const desktopWidth = (value) => {
  return {
    type: SET_DESKTOP,
    payload: value,
  };
};