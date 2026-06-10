import React from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import Hero from './Componenets/Hero/Hero'
import Services from './Componenets/Services/Services'
import Chooseus from './Componenets/Chooseus/Chooseus'
import Decorations from './Componenets/decorations/decorations'
import AboutUs from './Componenets/AboutUs/aboutUs'
import Gallery from './Componenets/Gallery/gallery'
import Reviews from './Componenets/Reviews/reviews'
import FAQs from './Componenets/FAQs/FAQs'
import Footer from './Componenets/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
     <Services/>
     <Chooseus/>
     <Decorations/>
     <Gallery/>
     <Reviews/>
     <FAQs/>
     <Footer/>
    </div>
  )
}

export default App