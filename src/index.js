import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/header/HeaderComponent.css';
import './components/section1/SectionComponent.css';
import './components/buttons/Button.css'
import './components/phoneNumber/PhoneNumber.css'
import './components/section2/Section2.css'
import './components/section3/Section3.css'
import './components/buttons/ExploreButton.css'
import './components/footer/Footer.css'
import './components/section4/Section4.css'
import './components/section5/Section5.css'
import './components/section6/Section6.css'

import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

reportWebVitals();
