import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Partners from './Partners'
import { fetchPartners } from '../../shared/actions/partnersAction'
import { fetchPartnersMajor } from '../../shared/actions/partnersMajorAction'

const mapStateToProps = ({ partners, partnerMajors }) => ({
    partners,
    partnerMajors
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPartners,
    fetchPartnersMajor
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Partners)