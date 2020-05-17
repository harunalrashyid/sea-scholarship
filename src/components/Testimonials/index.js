import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Testimonials from './Testimonials'
import { fetchTestimonials } from '../../shared/actions/testimonialsAction'

const mapStateToProps = ({ testimonials }) => ({
    testimonials
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTestimonials
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Testimonials)