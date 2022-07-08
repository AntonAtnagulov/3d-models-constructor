import { combineReducers } from 'redux';
import hoverTargetReducer from './hoverTargetReducer'
import cannonReducer from './cannonReducer';
import infoBoxReducer from './infoBoxReducer';

const rootReducer = combineReducers({
  hoverTarget: hoverTargetReducer,
  cannonName: cannonReducer,
  infoBox: infoBoxReducer,
});

export default rootReducer;
