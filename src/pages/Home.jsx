import React, { Fragment } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Project from '../components/Project'
import Services from '../components/Services'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <Fragment>
        <Nav/>
        <Header/>
        <Services/>
        <Skills/>
        <Project/>
    </Fragment>
  )
}
