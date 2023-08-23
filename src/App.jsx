

import React from 'react';
import { Navbar, Brand, Feature, Cta} from './components';
import {Footer, Blog, Possibility,  WhatGP3, Header } from './containers'

 const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />



    </div>
  )
}
export default App
