import { 
    FETCH_PARTNERS_SUCCESS
} from '../actions/typesAction'

import { getNewState } from '../helpers/frontend'

const initialState = {
    partners: []
}

export default function partnersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PARTNERS_SUCCESS: {
            const { payload: partners } = action

            return getNewState(state, { partners })
        }

        default:
            return state;
    }
}
