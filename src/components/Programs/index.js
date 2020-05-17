import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Programs from './Programs'
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
)(Programs)