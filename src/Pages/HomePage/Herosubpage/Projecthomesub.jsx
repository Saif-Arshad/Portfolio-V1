/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import '../Herosubpage/projecthomesub.scss'
import '../Herosubpage/queryProject.scss'
import Card from '../../../Components/Cards/Cards'
export default function Projecthomesub() {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  return (
    <div className='projectsub'>
      <h2>💻All Creative Works.</h2>
      <p>Here&apos;s some of my projects that I have worked on.</p>
      <Link to='/project'>Explore more →</Link>
      <Card />

    </div>
  )
}
