import { combineReducers } from 'redux'

import allWebContent from './allWebContentReducer'
import partners from './partnersReducer'
import partnerMajors from './partnersMajorReducer'
import testimonials from './testimonialsReducer'

const rootReducer = combineReducers({
    allWebContent,
    partners,
    partnerMajors,
    testimonials
})

export default rootReducer
