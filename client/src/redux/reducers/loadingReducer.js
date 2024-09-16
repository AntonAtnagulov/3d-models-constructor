import initState from "../initState";

const loadingReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return payload;

    default:
      return state;
  }
};

export default loadingReducer;