import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3_header-content">
        <h1>Let us Now Build Something Amazing with React Library</h1>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Please type your email" />
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>

  )
}

export default Header