import React from 'react'
import style from './section2.module.css'

function Section2() {
  return (
    <>
      <div className={style.outerContainer}>
        <div className={style.container}>
            <div className={style.header}>
                <h1>The burger tastes better <br />when you eat it with your <br/>family</h1> 
            </div>
            <div className={style.des}>
                <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus</p>

            </div>
            <div className={style.btn}>
                <button>EXPLORE FULL MENU</button>

            </div>
        </div>
      </div>
      
    </>
  )
}

export default Section2
