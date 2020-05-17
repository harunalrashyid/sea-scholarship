import {
    FETCH_ALL_WEB_CONTENT_SUCCESS
} from '../actions/typesAction'

import { getNewState } from '../helpers/frontend'

const initialState = {
    allWebContent: []
}

export default function allWebContentReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_WEB_CONTENT_SUCCESS: {
            const { payload: allWebContent } = action

            return getNewState(state, { allWebContent })
        }

        default:
            return state;
    }
}
