import React, { Fragment } from 'react'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Project from '../components/Project'
import Services from '../components/Services'
import Skills from '../components/Skills'

export default function Home() {
  const [light , setLight]=React.useState(false)
  function toggleLightMode(){
    setLight(prevMode=> ! prevMode)
  }
  return (
    <Fragment>
        <Nav toggleLightMode={toggleLightMode} light={light} />
        <Header light={light}/>
        <Services light={light}/>
        <Skills light={light}/>
        <Project light={light}/>
        <ContactMe light={light}/>
        <Footer light={light}/>
    </Fragment>
  )
}
