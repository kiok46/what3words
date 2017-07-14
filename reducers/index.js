import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import LinksReducer from './LinksReducer';
import SettingsReducer from './SettingsReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
	HomeReducer, LinksReducer, SettingsReducer, ProfileReducer
});
