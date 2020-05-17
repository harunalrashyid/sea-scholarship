import { 
    FETCH_PARTNERS_MAJOR_SUCCESS
} from '../actions/typesAction'

import { getNewState } from '../helpers/frontend'

const initialState = {
    majors: []
}

export default function partnersMajorReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PARTNERS_MAJOR_SUCCESS: {
            const { payload: partnerMajors } = action

            return getNewState(state, { partnerMajors })
        }

        default:
            return state;
    }
}
