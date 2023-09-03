import React from 'react'
import "./cta.css"

 const Cta = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Get the React Official Documentation by clicking here</p>
        <h3>Useful Tutorials can be accessed here below:</h3>
        <button type='button'><a href="https://www.tutorialspoint.com/reactjs/index.htm" target="blank" >TutorialsPoint</a></button>
        <button type='button'><a href="https://www.codecademy.com/learn/react-101"target="blank" >CodeAcademy</a></button>
         <button type='button'><a href="https://react-tutorial.app/app.html"target="blank" >React Tutorial</a></button>
      </div>
      <div className="gpt3__cta-btn">
        <button type='button'><a href="https://react.dev/"target="blank" >React Docs</a></button>


      </div>
    

    </div>
  )
}
export default Cta
