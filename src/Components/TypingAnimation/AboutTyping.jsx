import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Typing() {
  return (
      <TypeAnimation
      sequence={[
        'A MERN Stack Developer', 
        2000,
        'A Next Js Developer',
        2000, 
        'Open Source enthusiast',
        2000, 
        'A Member of the Jedi Order',
        2000,  
        'An Avenger',
        2000, 
        // () => {
        // },
      ]}
      wrapper="h3"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />
  )
}
