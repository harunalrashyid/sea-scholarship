import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Timeline from './Timeline'
import { fetchAllWebContent } from '../../shared/actions/allWebContentAction'

const mapStateToProps = ({ allWebContent }) => ({
    allWebContent
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllWebContent
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timeline)