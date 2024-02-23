import React from 'react'
import PortfolioCard from '../../Components/PortfolioCard/Portfolio'
import '../HomePage/Herosubpage/projecthomesub.scss'
import '../HomePage/Herosubpage/queryProject.scss'
import '../Portfoliopage/PortfolioMain.scss'
import '../Portfoliopage/queryportfolioMain.scss'

export default function PortfolioMain() {
  return (
    <div className='Mainportfoliopage'>
        <h1>🚀Some Things I’ve Built.</h1>
        <p>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</p>
      <PortfolioCard/>
    </div>
  )
}
