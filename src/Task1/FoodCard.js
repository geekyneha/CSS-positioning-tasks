import React from 'react'
import style from './food-card.module.css'

const FoodCard = () => {
  return (
    <>
    <div className={style.card}>
        <figure className={style["image-container"]}>
            <img src="https://source.unsplash.com/430x250/?burger" alt="food-image" className={style.food} />
            <p className={style.promoted}>Promoted</p>
            <p className={style.offer}>50 % OFF up to 100</p>
            <p className={style["delivery-time"]}>38 min</p>
        </figure>
        <div className={style.content}>
       
            <h3 className={style.restaurant}>Center Point Restaurant</h3>
            <p className={style.cusines}>North-Indian , Chinese</p>
           
            <hr />
            <div className={style["max-safety"]}>
                
                <div className={style.container}>
                    <div className={style.safety}>
                        max safety
                    </div>
                    <div className={style.delivery}>
                        delivery
                    </div>
                </div>

                <div className={style["about-safety"]}>Follows All Max Safety Measures to ensure your food is safe.</div>

            </div>

        </div>

    </div>
    </>
  )
}

export default FoodCard