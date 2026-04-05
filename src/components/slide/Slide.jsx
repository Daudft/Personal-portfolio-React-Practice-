import React from 'react'
import "./slide.scss"

const Slide = () => {
  return (
   <footer className='slide'>
    <div className="icon github"><img src="./slide-icons/github.svg" alt="" /></div>
    <div className="icon note"><img src="./slide-icons/note.svg" alt="" /></div>
    
    <div className="icon mail"><img src="./slide-icons/mail.svg" alt="" /></div>
    <div className="icon pdf"><img src="./slide-icons/pdf.svg" alt="" /></div>
    <div className="icon cli"><img src="./slide-icons/cli.svg" alt="" /></div>
    <div className="icon spotify"><img src="./slide-icons/spotify.svg" alt="" /></div>
    <div className="icon calender"><img src="./slide-icons/calender.svg" alt="" /></div>
    <div className="icon link"><img src="./slide-icons/link.svg" alt="" /></div>
   </footer>
  )
}

export default Slide
