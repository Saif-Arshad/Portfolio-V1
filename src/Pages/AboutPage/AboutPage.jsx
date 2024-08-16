import React from 'react'
import FirstAbout from './SubAbout/FirstAbout'
import KeepTouch from '../HomePage/Herosubpage/KeepTouch'
import Header from '../../Components/Header/Header'
import { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
export default function AboutPage() {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <FirstAbout />
      <KeepTouch />
      <Footer />
    </>
  )
}
