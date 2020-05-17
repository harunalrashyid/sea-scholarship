import React, { Component } from 'react'

import { isFirstRender } from '../../shared/helpers/frontend'

class Majors extends Component {
    componentWillMount() {
        const { fetchPartners, fetchPartnersMajor } = this.props
        fetchPartners()
        fetchPartnersMajor()
    }

    render() {
        const { majors: { majors } } = this.props

        if ( isFirstRender(majors)) {
            return null
        }

        return (
            <section className="Partners">
                <div className="container">
                    <div className="row">
                        <ul>
                        {majors.data.map((major, key) => (
                            <li className="Partners__major-item" key={key}>{major.name}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Majors