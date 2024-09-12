import React from 'react'
import Button from '../buttons/Button'
import ExploreButton from '../buttons/ExploreButton'

const Section2 = () => {
    return (
        <div className='section3-main-div'>
            <div className='section2-header'>
                <h1 className='section2-h1'>About Us</h1>
                <p className='section2-p'> Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>

            </div>
            <div className='total-div'>
                <div className='single-div'>
                    <img className='single-image' src="./assets/section21.svg" alt="21" />
                    <div className='single-text'>
                        <h3 className='single-h3'>1. Schedule online</h3>
                        <p className='single-p'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                    </div>
                </div>
                <div className='single-div'>
                    <img className='single-image' src="./assets/section22.svg" alt="21" />
                    <div className='single-text'>
                        <h3 className='single-h3'>2. Pay online easily</h3>
                        <p className='single-p'>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
                    </div>
                </div>
                <div className='single-div'>
                    <img className='single-image' src="./assets/section23.svg" alt="21" />
                    <div className='single-text'>
                        <h3 className='single-h3'>3. Get your house cleaned</h3>
                        <p className='single-p'>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
                    </div>
                </div>
            </div>

            <div className='section2-buttons'>
                <Button />

                <ExploreButton />

            </div>
        </div>
    )
}

export default Section2