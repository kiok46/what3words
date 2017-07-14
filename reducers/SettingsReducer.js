import {
	SOME_ACTION,
} from '../actions/types';

export const INITIAL_STATE = {
	default_value: '',
};

export default ( state=INITIAL_STATE, action ) => {
	switch (action.type) {
		case SOME_ACTION:
		    return { ...state, default_value: action.payload};
		default:
			return state;

	}
};
