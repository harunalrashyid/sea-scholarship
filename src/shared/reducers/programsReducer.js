import {
    FETCH_PROGRAMS_SUCCESS
} from '../actions/typesAction'

import { getNewState } from '../helpers/frontend'

const initialState = {
    programs: []
}

export default function programsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROGRAMS_SUCCESS: {
            const { payload: programs } = action

            return getNewState(state, { programs })
        }

        default:
            return state;
    }
}
