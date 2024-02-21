import React from 'react'
import Intro from './Herosubpage/Intro'
import Introduction from './Herosubpage/Introduction'
import Projecthomesub from './Herosubpage/Projecthomesub'
import KeepTouch from './Herosubpage/KeepTouch'
export default function Hero() {
  return (
<div className="Hero-Div">
<Intro/>
<Introduction/>
<Projecthomesub/>
<KeepTouch/>
</div>
  )
}
