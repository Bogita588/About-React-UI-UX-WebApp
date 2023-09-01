import React from 'react'
import {Feature} from '../../components'
import './whatGPT3.css'

const WhatGP3 = () => {
  return (

    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      

      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient-text'>React feautures are beyond your Imagination </h1>
        <p>Find out more about React</p>
      </div>
      <div className="gpt__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />

      </div>

    </div>
  )
}

export default WhatGP3