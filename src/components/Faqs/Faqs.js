import React, { Component } from 'react'
import { isFirstRender } from '../../shared/helpers/frontend'

class Faqs extends Component {
    componentDidMount() {
        const { fetchAllWebContent } = this.props
        fetchAllWebContent()
    }

    render() {
        const { allWebContent: { allWebContent } } = this.props

        if (isFirstRender(allWebContent)) {
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
                         dangerouslySetInnerHTML={{ __html: allWebContent.data[0].faq_content }} 
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default Faqs
