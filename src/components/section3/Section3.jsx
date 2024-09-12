import React from 'react'
import ExploreButton from '../buttons/ExploreButton'

const Section3 = () => {
    return (
        <div className='section3-main-div'>
            <div className='section3-header-div'>
                <h1 className='section3-h1'>Our Services</h1>
                <ExploreButton />
            </div>
            <div className="section3-total-div">
                <div className="section3-single-div">
                    <img className='single-image' src="./assets/section31.svg" alt="31" />
                    <div>
                        <h3 className='single-h3'>House cleaning</h3>
                        <p className='section3-single-p'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                </div>
                <div className="section3-single-div">
                    <img className='single-image' src="./assets/section32.svg" alt="31" />
                    <div>
                        <h3 className='single-h3'>Office cleaning</h3>
                        <p className='section3-single-p'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                </div>
                <div className="section3-single-div">
                    <img className='single-image' src="./assets/section33.svg" alt="31" />
                    <div>
                        <h3 className='single-h3'>Industrial cleaning</h3>
                        <p className='section3-single-p'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Section3
