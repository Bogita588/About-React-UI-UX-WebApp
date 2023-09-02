import React from 'react'
import {Feature} from '../../components'
import './whatGPT3.css'

const WhatGP3 = () => {
  return (

    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is React ?" text="React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. "/>
      

      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient-text'>React features are beyond your Imagination </h1>
        <p>Find out more about React</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Other Frameworks" text="Vue JS. VueJS is one of the fastest-growing alternatives to React and is mainly targeted toward the development of single-page apps and UIs. The open-source JavaScript framework is one of the most flexible, developer-friendly, and fastest alternatives available to developers right now."/>
        <Feature title="Who created React ?" text="React was released first in 2013, and since then, it has become one of the most popular JavaScript libraries for building user interfaces. It was developed by Jordan Walke, a software engineer at Facebook, and was initially released as an open-source project on GitHub"/>
        <Feature title="The React popularity" text="It was voted the 2nd most popular web framework for developers, only falling behind Node. js (see above) 2022 in the reliable StackOverflow Developer Survey 2022. That's a 7% increase in popularity from 2020 when it was the choice of only 36% - despite also coming in second. And in 2021 React took the top spot."/>

      </div>

    </div>
  )
}

export default WhatGP3