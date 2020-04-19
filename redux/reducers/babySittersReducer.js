
const initialState = {};

const babySitterReducer = (state = initialState, action) => {
  switch (action.type) {
    // case DECREMENT_COUNTER:
    // return {...state, value: state.value - 1};
    default:
      return { ...state };
  }
};

export default babySitterReducer;
