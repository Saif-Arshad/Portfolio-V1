import React from 'react'
import {Link} from "react-router-dom";
import  '../Herosubpage/projecthomesub.scss'
import  '../Herosubpage/queryProject.scss'
import Card from '../../../Components/Cards/Cards'
export default function Projecthomesub() {
  return (
    <div className='projectsub'>
        <h2>💻All Creative Works.</h2>
        <p>Here's some of my projects that I have worked on.</p>
<Link to='/project'>Explore more →</Link>
<Card/>

    </div>
  )
}
