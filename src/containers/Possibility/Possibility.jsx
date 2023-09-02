import React from 'react'
import possibility from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        {/**/}
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        
        <h1>Find out What you need to master Front End Development</h1>
        <p><p>Click the link below to learn more</p></p>
        <h4><a href ="https://www.knowledgehut.com/blog/web-development/front-end-development-frameworks" target="_blank"rel="noopener noreferrer"><u>Popular Front End Frameworks</u></a></h4>
      </div>
    </div>
  )
}

export default Possibility