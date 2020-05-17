import React, { Component } from 'react'
import Flickty from 'react-flickity-component'
import "flickity/css/flickity.css";

import { isFirstRender } from '../../shared/helpers/frontend'

class Partners extends Component {
    componentWillMount() {
        const { fetchPartners, fetchPartnersMajor } = this.props
        fetchPartners()
        fetchPartnersMajor()
    }

    render() {
        const { 
            partners: { partners },
            partnerMajors: { partnerMajors }
        } = this.props

        if ( isFirstRender(partners) || isFirstRender(partnerMajors) ) {
            return null
        }

        return (
            <section className="Partners">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <h1 className="Partners__title">Partner Universities</h1>
                    </div>
                    <Flickty className={'col-md-12'}>
                    {partners.data.map((partner, key) => (
                        <div className="Partners__item col-md-12" key={key}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="inner-wrapper">
                                            <img src={ partner.univ_logo } alt={ `Partner logo ${partner.univ_name}` }/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h3 className="Partners__name">{ partner.univ_name }</h3>
                                        <div className="Partners__major">
                                            <ul className="Partners__major-list">
                                            {partnerMajors.data.map((major, key) => (
                                                ( major.univ_id === partner.id ) ?
                                                <li className="Partners__major-item" key={key}>{major.name}</li>
                                                : ''
                                            ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Flickty>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partners