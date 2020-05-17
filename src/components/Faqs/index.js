import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Faqs from './Faqs'
import { fetchPrograms } from '../../shared/actions/programsAction'

const mapStateToProps = ({ programs }) => ({
    programs
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPrograms
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Faqs)