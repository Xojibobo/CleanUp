import React from 'react'

const Header = () => {
    return (
        <div className='main-div'>

            <div className=' second-div'>
                <img src="./assets/logo.svg" alt="lg" />

                <ul className='header-ul'>

                    <li className='header-li'>Home</li>
                    <li className='header-li'>About</li>
                    <li className='header-li'>Services</li>
                    <li className='header-li'>Articles</li>
                    <li className='header-li'>Contact</li>
                </ul>
            </div>
            <div className='third-div'>
                <p className='card-info'>Cart(0)</p>
                <button className='header-button'>Get a free quote</button>
            </div>

        </div>
    )
}

export default Header


