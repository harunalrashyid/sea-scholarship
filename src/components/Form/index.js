import React from 'react'

import imgOverlay from '../../shared/images/BG-Apply.jpg'

const Form = () => {
    return (
        <section className="Form">
            <div className="Form__overlay">
                <img src={imgOverlay} alt="Banner Overlay"/>
            </div>
            <div className="container">
                <div className="Form__row row">
                    <div className="col-md-12">
                        <h1 className="Form__heading">
                            Applications are now closed. <br/>
                            We'll see you again next year. 
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form
