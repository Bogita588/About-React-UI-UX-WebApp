import React from 'react'
import'./footer.css';
import react from '../../assets/react.png';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1>Would you like to join the React Community?</h1>

      </div>
      <div className="gpt3__footer-btn">
        <p><a href="https://react.dev/community" target="blank">Join the Community</a></p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          {/*<img src={react} alt="logo" /> */}
          <p>Bogita Brian, All rights are reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>GitHub</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>DevTo</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>GitHub</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>DevTo</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>GitHub</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>DevTo</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2023 React. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer