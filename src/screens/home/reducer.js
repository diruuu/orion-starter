const initialState = {
  idGen: 0,
  counters: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HOME/INCREMENT': {
      return {
        ...state, activities: action.payload,
      };
    }
    case 'HOME/DECREMENT': {
      return {
        ...state, activities: [...state.activities, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
