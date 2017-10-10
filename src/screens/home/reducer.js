const initialState = {
  fireColor: '#000',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HOME/CHANGE_FIRE_COLOR': {
      return {
        ...state, fireColor: action.fireColor,
      };
    }
    default: {
      return state;
    }
  }
};
