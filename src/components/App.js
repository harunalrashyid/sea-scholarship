import React from 'react';
import Header from '../shared/layouts/Header'
import Footer from '../shared/layouts/Footer'

import Banner from './Banner'
import Programs from './Programs'
import Partners from './Partners'
import Timeline from './Timeline'
import Testimonials from './Testimonials'
import Form from './Form'
import Faqs from './Faqs'

import imgLogo from '../shared/images/Logo_App.png'

function App() {
  return (
    <div className="App">
      <Header logo={ imgLogo } />
      <main>
        <Banner />
        <Programs />
        <Partners />
        <Timeline />
        <Testimonials />
        <Form />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
