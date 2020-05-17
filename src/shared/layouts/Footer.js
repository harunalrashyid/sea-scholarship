import React from 'react'

import imgOverlay from '../../shared/images/BG-Foot.jpg'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__overlay">
                <img src={imgOverlay} alt="Footer Overlay"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="Footer__content">
                            For more information about Sea, checkout our corporate website <a href="/">here</a>. <br/>
                            if you have further queries, reach to us at <a href="mailto:id-scholarships@seagroup.com" rel="noopener">
                                id-scholarships@seagroup.com
                            </a>
                        </p>
                        <span className="Footer__copyright">© { new Date().getFullYear() }</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
