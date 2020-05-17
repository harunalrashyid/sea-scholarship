import React from 'react'
import imgBanner from '../../shared/images/icon-graduate.png'
import imgOverlay from '../../shared/images/BG-Head.jpg'

const Banner = () => {
    return (
        <section className="Banner">
          <div className="Banner__overlay">
            <img src={imgOverlay} alt="Banner Overlay"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="Banner__heading">Congratulations Sea Scholarship 2019 Awardees!</h1>
                <p className="Banner__content">The Sea Scholarship Committee is proud to announce the 2019 Academic Year Sea Scholarship recipients. Final award email notifications were sent on October 17, 2019</p>
              </div>
              <div className="col-md-6">
                <div className="innerWrapper">
                  <img src={ imgBanner } alt="Banner Graduate"/>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Banner