import React, { Component } from 'react'
import Flickty from 'react-flickity-component'
import "flickity/css/flickity.css";

import { isFirstRender } from '../../shared/helpers/frontend'

class Testimonials extends Component {
    componentWillMount() {
        const { fetchTestimonials } = this.props
        fetchTestimonials()
    }

    render() {
        const { testimonials: { testimonials } } = this.props

        if (isFirstRender(testimonials)) {
            return null
        }

        return (
            <section className="Testimonials">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <h1 className="Testimonials__heading">Testimonials</h1>
                    </div>
                    <Flickty className={'col-md-12'}>
                    {testimonials.data.map((testimony, key) => (
                        <div className="Testimonials__item col-md-12" key={key}>
                            <div className="container">
                                <div className="Testimonials__item-row row">
                                    <div className="Testimonials__item-col-left col-md-4">
                                        <div className="inner-wrapper">
                                            <img src={ testimony.image } alt={ `Testimony ${testimony.name}` }/>
                                        </div>
                                    </div>
                                    <div className="Testimonials__item-col-right col-md-8">
                                        <p className="Testimonials__content">{ testimony.story }</p>
                                        <h3 className="Testimonials__name">{ testimony.name }</h3>
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

export default Testimonials
