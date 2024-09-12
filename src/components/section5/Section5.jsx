import React from 'react'
import Button from '../buttons/Button'

const Section5 = () => {
    return (
        <div className='section-5-super-div'>
            < hr className='section5-hr' />

            <div className='section5-main-div'>
                <div className="section5-header-div">
                    <h2 className='section5-h2'>Articles & resources</h2>
                    <div className="header-buttons">
                        <Button />
                        <button className='section5-explore-button'>Browse articles</button>
                    </div>
                </div>
                <div className="section5-contents">
                    <div className="section5-single-content">
                        <img src="./assets/section51.svg" alt="aaa" />
                        <div className='content-text'>
                            <p className='content-text-p1'>8 best vacuum cleaners to clean any mess for your home in 2022</p>
                            <p className='content-text-p2'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <div className='section5-box-div'>
                                <p>Jan 28, 2022</p>
                                <span></span>

                            </div>
                        </div>
                    </div>

                    <div className="section5-single-content">
                        <img src="./assets/section52.svg" alt="aaa" />
                        <div className='content-text'>
                            <p className='content-text-p1'>How to properly disinfect your phone and other electronics</p>
                            <p className='content-text-p2'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <div className='section5-box-div'>
                                <p>Feb 1, 2022</p>
                                <span></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5
