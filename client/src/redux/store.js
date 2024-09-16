import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import initState from "./initState";
import rootReducer from "./reducers/rootReducer";

const store = createStore( 
  rootReducer, 
  initState
);

export default store ;
