import React from 'react'
import "./hero.scss"

const Hero = () => {
  return (

    <>

    <section className='img-card'>
      <img src="./imh.png" alt="" />
    </section>
    <section className='hero'>

      

      <div className='hero__marquee'>
        <div className='hero__track hero__track--ltr'>
          <h1>Designer and developer crafting bold digital experiences</h1>
          <h1>Designer and developer crafting bold digital experiences</h1>
        </div>

        <div className='hero__track hero__track--rtl'>
          <h1>Designer and developer crafting bold digital experiences</h1>
          <h1>Designer and developer crafting bold digital experiences</h1>
        </div>
      </div>

     
    </section>
    </>

    
  )
}

export default Hero
