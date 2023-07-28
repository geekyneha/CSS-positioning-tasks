import React from 'react'
import style from './hero.module.css'

const Hero = () => {
  return (
   <>
   <div className={style.hero}>
   <figure className={style["figure-container"]}>
    <img src="https://source.unsplash.com/700x400/?bali" alt="nature-image" className={style.image} />
   
    
   </figure>

   <div className={style.about}>
    <h1 className={style.caption}>Explore the Diversities in Bali</h1>
   <p className={style.details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, libero!</p>
   <button className={style.button}>Explore Now</button>
    </div>
    

   </div>
  
   </>
  )
}

export default Hero