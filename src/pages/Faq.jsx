import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'
import Faq from '../components/Faq/Faq'
import Roadmap from '../components/roadmap/Roadmap'
const Faqpage = () => {
  return (
    <main className='landpage gold-page'>
    <Header />
      <section className='about-landpage faq-landpage'>
        <div className="about-page-text">
          <h3>frequently asked questions</h3>
          <span className="small-thin-line"></span>
        </div>
      </section>
       <Faq />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  )
}

export default Faqpage