import React from 'react'
import Button from '../buttons/Button'


const Section4 = () => {
    return (
        <div className='section4-main-div'>
            <img src="./assets/section4Img.svg" alt="aaa" />
            <div className='section4-text-div'>
                <p className='section4-p'>Covid-19 sanitization</p>
                <h1 className='footer-h1'>We follow guidelines to keep you safe from the COVID-19 virus</h1>
                <p className='section4-p2'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                <div className='section-buttons-div'>
                    <Button />
                    <div className='section4-call'>
                        <img className='section4-imgCall' src="./assets/phone.svg" alt="" />
                        <div className='section4-call-div'>
                            <p className='section4-p1'>CALL US NOW</p>
                            <p className='section4-p2'>(414) 567 - 2109</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section4
