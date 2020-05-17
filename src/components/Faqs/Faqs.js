import React, { Component } from 'react'
import { isFirstRender } from '../../shared/helpers/frontend'

class Faqs extends Component {
    componentDidMount() {
        const { fetchPrograms } = this.props
        fetchPrograms()
    }

    render() {
        const { programs: { programs } } = this.props

        if (isFirstRender(programs)) {
            return null
        }

        return (
            <section className="Faqs">
                <div className="container">
                    <div className="Faqs__row row">
                    <div className="col-md-12">
                        <h1 className="Faqs__heading">FAQ</h1>
                    </div>
                        <div 
                         className="Faqs__list col-md-8" 
                         dangerouslySetInnerHTML={{ __html: programs.data[0].faq_content }} 
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default Faqs
