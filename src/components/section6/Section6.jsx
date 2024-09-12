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
                    <form action="#">
                        <div class="form-group">
                            <label htmlFor="fname">Full name</label>
                            <input type="text" id='fname' placeholder="Enter your full name" />
                        </div>

                        <div class="form-group">
                            <label htmlFor="phone">Phone number</label>
                            <input type="number" id='phone' placeholder="Enter your phone number" />
                        </div>

                        <div class="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id='address' placeholder="Enter your address" />
                        </div>

                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' placeholder="Enter your email" />
                        </div>

                        <div class="form-group">
                            <label htmlFor="request">Requested service</label>
                            <input type="text" id='request' placeholder="Enter the requested service" />
                        </div>

                        <div class="form-group">
                            <label htmlFor="day">Day of service</label>
                            <input type="text" id='day' placeholder="Enter the day of service" />
                        </div>

                        <div class="form-group">
                            <label htmlFor="note">Add a note</label>
                            <textarea name="text" id="note" placeholder="Write a note"></textarea>
                        </div>

                        <button type="submit" class="submit-btn">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Section6
