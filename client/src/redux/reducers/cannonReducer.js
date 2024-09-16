import initState from "../initState";

const cannonReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CANNON_NAME":
      return payload;

    default:
      return state;
  }
};

export default cannonReducer;