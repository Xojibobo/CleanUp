import React from 'react'
import PhoneNumber from '../phoneNumber/PhoneNumber'
const Section6 = () => {
    return (
        <div className='section6-main-div'>
            <div className='section6-contents'>
                <div className="section6-content1">
                    <h1 className='section6-contents-h1'>Contact Us</h1>
                    <p className='section6-contents-p1'>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                    <PhoneNumber />
                    <hr className='section6-contents-hr' />
                    <h3 className='section6-contents-h3'>Not convinced yet?</h3>
                    <p className='section6-contents-p2'>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                    <button className='section6-contents-button'>Browse our packages</button>
                </div>

                <div className='section6-content2'>
                    <form action="#" className='form-main'>
                        <div className="section6-form-column">
                            <div class="form-group">
                                <label className='form-label' htmlFor="fname">Full name</label><br />
                                <input className='form-input' type="text" id='fname' />
                            </div>
                            <div class="form-group">
                                <label className='form-label' htmlFor="number">Phone number</label><br />
                                <input className='form-input' type="text" id='number' />
                            </div>
                        </div>

                        <div className="section6-form-column">
                            <div class="form-group">
                                <label className='form-label' htmlFor="address">Adress</label><br />
                                <input className='form-input' type="text" id='address' />
                            </div>
                            <div class="form-group">
                                <label className='form-label' htmlFor="email">Email</label><br />
                                <input className='form-input' type="text" id='email' />
                            </div>
                        </div>

                        <div className="section6-form-column">
                            <div class="form-group">
                                <label className='form-label' htmlFor="service">Requested service</label><br />
                                <input className='form-input' type="text" id='service' />
                            </div>
                            <div class="form-group">
                                <label className='form-label' htmlFor="day">Day of service</label><br />
                                <input className='form-input' type="text" id='day' />
                            </div>
                        </div>

                        <div className="section6-form-column-text">
                            <div class="form-group">
                                <label className='form-label' htmlFor="note">Add a note</label><br />
                                <textarea className='form-input' cols={50} maxLength={77} rows={4} name="" id=""></textarea>
                            </div>

                        </div>

                        <button type="submit" className='form-button'>Submit message</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Section6
