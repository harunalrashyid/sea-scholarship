import {
    FETCH_TESTIMONIALS_SUCCESS
} from '../actions/typesAction'

import { getNewState } from '../helpers/frontend'

const initialState = {
    programs: []
}

export default function programsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TESTIMONIALS_SUCCESS: {
            const { payload: testimonials } = action

            return getNewState(state, { testimonials })
        }

        default:
            return state;
    }
}
