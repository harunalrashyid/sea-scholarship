import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Programs from './Programs'
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
)(Programs)