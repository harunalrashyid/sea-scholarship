import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Timeline from './Timeline'
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
)(Timeline)