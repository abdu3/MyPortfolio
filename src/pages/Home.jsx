import React, { Fragment } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <Fragment>
        <Header/>
        <Services/>
        <Skills/>
    </Fragment>
  )
}
