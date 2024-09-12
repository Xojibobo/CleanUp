import React from 'react'
import Button from '../buttons/Button'

const Footer = () => {
    return (
        <div className='footer-main-div'>
            <div className='footer-total-div'>
                <div className="footer-single-div">
                    <h3 className='footer-h3'>Quality cleaning for your home</h3>
                    <p className='footer-p'>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                    <div className='footer-star-div'>
                        <img className='footer-star-box' src="./assets/star.svg" alt="" />
                        <img className='footer-star-box' src="./assets/star.svg" alt="" />
                        <img className='footer-star-box' src="./assets/star.svg" alt="" />
                        <img className='footer-star-box' src="./assets/star.svg" alt="" />
                        <img className='footer-star-box' src="./assets/star.svg" alt="" />
                    </div>
                </div>

                <div className="footer-single-div">
                    <h3 className='footer-h4'>Contact us</h3>
                    <p className='footer-p'>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                    <p className='footer-p'>(414) 567 - 2109</p>
                    <p className='footer-p'>contact@cleaning.com</p>
                </div>

                <div className="footer-single-div">
                    <h3 className='footer-h4'>Hours</h3>
                    <h5 className='footer-h5'>Monday to Friday</h5>
                    <p className='footer-p'>6:00 AM - 9:00 PM</p>
                    <h5 className='footer-h5'>Saturday & Sunday</h5>
                    <p className='footer-p'>8:00 AM - 8:00 PM</p>
                </div>

                <div className="footer-single-div">
                    <h3 className='footer-h4'>Get a free estimate</h3>
                    <h3 className='footer-phone'>(414) 567 - 2109</h3>
                    <p className='footer-p'>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                    <Button />
                </div>
            </div>

            <div className='footer-end-div'>
                <img src="./assets/logo.svg" alt="logo" />
                <p>Copyright © Cleaning X | Designed by BRIX Templates - Powered by Webflow Licenses</p>
            </div>
        </div>
    )
}

export default Footer
