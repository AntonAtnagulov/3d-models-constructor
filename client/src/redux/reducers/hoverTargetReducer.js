import initState from "../initState";

const hoverTargetReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_HOVER_TARGET":
      return payload;

    default:
      return state;
  }
};

export default hoverTargetReducer;