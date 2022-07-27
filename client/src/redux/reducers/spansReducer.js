import initState from "../initState";

const mathCapReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SPANS":
      return payload;

    default:
      return state;
  }
};

export default mathCapReducer;