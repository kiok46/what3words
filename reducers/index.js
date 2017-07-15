import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import CompassReducer from './CompassReducer';
import SettingsReducer from './SettingsReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
	MapReducer, CompassReducer, SettingsReducer, ProfileReducer
});
