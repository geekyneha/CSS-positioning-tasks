import React from 'react'
import style from './profile.module.css'

const Profile = () => {
  return (
    <div className={style["profile-card"]}>
        <picture className={style.picture}>
        <img src="https://source.unsplash.com/470x160/?nature" alt="background" className={style.background}/>
         <img src="https://source.unsplash.com/130x130/?avatar" alt="user" className={style.user} />
        </picture>
   

        <div className={style.about}>
            <h1>Hamza Khan</h1>
            <h3 className={style.position}>Frontend devloper & freelancer</h3>

        </div>

    </div>
  )
}

export default Profile;