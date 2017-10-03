export const increment = id => ({
  type: 'HOME/INCREMENT',
  payload: {
    id,
  },
});

export const decrement = id => ({
  type: 'HOME/DECREMENT',
  payload: {
    id,
  },
});
