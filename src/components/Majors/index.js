import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Majors from './Majors'
import { fetchPartners } from '../../shared/actions/partnersAction'
import { fetchPartnersMajor } from '../../shared/actions/partnersMajorAction'

const mapStateToProps = ({ majors }) => ({
    majors
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPartners,
    fetchPartnersMajor
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Majors)