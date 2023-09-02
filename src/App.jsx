

import React from 'react';
import { Navbar, Brand, Cta} from './components';
import {Footer, Blog, Possibility, Features,  WhatGP3, Header } from './containers'

 const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />



    </div>
  )
}
export default App
