import { combineReducers } from 'redux'

import programs from './programsReducer'
import partners from './partnersReducer'
import partnerMajors from './partnersMajorReducer'
import testimonials from './testimonialsReducer'

const rootReducer = combineReducers({
    programs,
    partners,
    partnerMajors,
    testimonials
})

export default rootReducer
