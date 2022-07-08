import initState from "../initState";

const infoBoxReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_INFOBOX":
      return payload;

    default:
      return state;
  }
};

export default infoBoxReducer;