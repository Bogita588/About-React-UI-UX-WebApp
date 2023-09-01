import React from 'react'
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1>Let us Now Build Something Amazing with React Library</h1>
        <p>React is a JavaScript library for rendering user interfaces (UI). 
          UI is built from small units like buttons, text, and images.
           React lets you combine them into reusable, nestable components. From web sites to phone apps, 
            everything on the screen can be broken down into components.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Please type your email" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt ="people"/>
          <p> React has over 30 million Developers, and it is in high demand</p>
        </div>

        
        


      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" /> 
        </div>
      

    </div>

  )
}

export default Header