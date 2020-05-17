import React, { Component } from 'react'
import { isFirstRender } from '../../shared/helpers/frontend'

import imgFreshman from '../../shared/images/icon-freshmen.png'
import imgSenior from '../../shared/images/icon-senior.png'

class Programs extends Component {
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
            <section className="Programs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="Programs__title">Undergraduate Scholarship Program</h1>
                            <p className="Programs__content">{allWebContent.data[0].program_content}</p>
                            {/*
                            {allWebContent.data.map((program, key) => (
                                <p className="Programs__content" key={key}>{program.program_content}</p>
                            ))}
                            */}
                        </div>
                        <div className="Programs__item col-md-6">
                            <div className="Programs__item-wrapper">
                                <div className="Programs__item-img">
                                    <img src={ imgFreshman } alt="Program Freshman Scholarship"/>
                                </div>
                                <h3 className="Programs__item-title">Sea Freshman Scholarship Program</h3>
                                <div 
                                className="Programs__item-content" 
                                dangerouslySetInnerHTML={{ __html: allWebContent.data[0].freshman_program }}
                                />
                            </div>
                        </div>
                        <div className="Programs__item col-md-6">
                            <div className="Programs__item-wrapper">
                                <div className="Programs__item-img">
                                    <img src={ imgSenior } alt="Program Senior Scholarship"/>
                                </div>
                                <h3 className="Programs__item-title">Sea Senior Scholarship Program</h3>
                                <div 
                                className="Programs__item-content" 
                                dangerouslySetInnerHTML={{ __html: allWebContent.data[0].senior_program }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Programs
