import React from 'react'
import style from './zomato.module.css'

const Zomato = () => {
  return (
    <div className={style.card}>
        <picture>
            <img src="https://source.unsplash.com/700x300/?biryani" alt="" />
        </picture>
        <div className={style.content}>
            <h1 className={style.heading}>Zomato</h1>
            <p className={style.about}>Discover the best food and Drink in lucknow</p>
            <fieldset className={style.fields}>
                <select name="" id=""  className={style.location}>
                    <span></span>
                    <option value="">Lucknow</option>
                </select>
                <input type="text" name="" id="" placeholder='serch for the restaurant, cusine or a dish' className={style.serch} />
            </fieldset>

        </div>

    </div>
  )
}

export default Zomato