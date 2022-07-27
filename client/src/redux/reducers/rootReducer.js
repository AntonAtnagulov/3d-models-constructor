import { combineReducers } from 'redux';
import hoverTargetReducer from './hoverTargetReducer'
import cannonReducer from './cannonReducer';
import infoBoxReducer from './infoBoxReducer';
import spansReducer from './spansReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
  cannonName: cannonReducer,
  spans: spansReducer,
  infoBox: infoBoxReducer,
  hoverTarget: hoverTargetReducer,
  loading: loadingReducer,
});

export default rootReducer;
