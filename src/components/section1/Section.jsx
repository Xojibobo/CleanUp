import React from 'react'
import Button from '../buttons/Button'
import PhoneNumber from '../phoneNumber/PhoneNumber'

const Section = () => {
    return (
        <div className='section-main-div'>
            <div className='section-text-div'>
                <h1 className='section-h1'>Quality cleaning for your home</h1>
                <p className='section-p'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                <div className='section-buttons-div'>
                    <Button />
                    <PhoneNumber />
                </div>
            </div>
            <img className='section-img' src="./assets/section1.svg" alt="" />
        </div>
    )
}

export default Section
