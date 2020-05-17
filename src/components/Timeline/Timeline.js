import React, { Component } from 'react'
import { isFirstRender } from '../../shared/helpers/frontend'

import imgTimeline1 from '../../shared/images/Timeline-1.png'
import imgTimeline2 from '../../shared/images/Timeline-2.png'
import imgTimeline3 from '../../shared/images/Timeline-3.png'
import imgTimeline4 from '../../shared/images/Timeline-4.png'

class Timeline extends Component {
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
            <section className="Timeline">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="Timeline__heading">Timeline</h1>
                        </div>
                        <div className="Timeline__item col-md-3">
                            <h3 className="Timeline__title">Registration</h3>
                            <div className="Timeline__content">
                                <div className="Timeline__img">
                                    <img src={ imgTimeline1 } alt="Timeline Registration"/>
                                </div>
                                <p className="Timeline__date">{allWebContent.data[0].date_regis}</p>
                            </div>
                        </div>
                        <div className="Timeline__item col-md-3">
                            <h3 className="Timeline__title">Essay and CV Screening</h3>
                            <div className="Timeline__content">
                                <div className="Timeline__img">
                                    <img src={ imgTimeline2 } alt="Timeline Essay and CV Screening"/>
                                </div>
                                <p className="Timeline__date">{allWebContent.data[0].date_esay_cvscreen}</p>
                            </div>
                        </div>
                        <div className="Timeline__item col-md-3">
                            <h3 className="Timeline__title">On-campus Interview</h3>
                            <div className="Timeline__content">
                                <div className="Timeline__img">
                                    <img src={ imgTimeline3 } alt="Timeline On-campus Interview"/>
                                </div>
                                <p className="Timeline__date">{allWebContent.data[0].date_interview}</p>
                            </div>
                        </div>
                        <div className="Timeline__item col-md-3">
                            <h3 className="Timeline__title">Announcement of Selected Scholars</h3>
                            <div className="Timeline__content">
                                <div className="Timeline__img Timeline__img--last">
                                    <img src={ imgTimeline4 } alt="Timeline Announcement of Selected Scholar"/>
                                </div>
                                <p className="Timeline__date">{allWebContent.data[0].date_announce}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Timeline
