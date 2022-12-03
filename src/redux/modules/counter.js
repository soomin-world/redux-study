const ADD_NUMBER = "ADD_NUMBER";

export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

const initialState = {
  number: 0,
};
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    default:
      return state;
  }
};
export default counter;
