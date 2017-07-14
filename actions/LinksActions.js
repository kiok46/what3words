import {
	SOME_ACTION
} from './types';

import Colors from '../constants/Colors';
import { INITIAL_STATE } from '../reducers/LinksReducer';


export const toggleLinksState = (activate) => {
	if (activate !== null){
		return {
			type: SOME_ACTION,
			payload: activate
		};
	}
	return {
		type: SOME_ACTION,
		payload: INITIAL_STATE.default_value
	};
}
