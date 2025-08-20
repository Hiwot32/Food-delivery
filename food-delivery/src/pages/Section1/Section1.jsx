import React from 'react'
import style from './section1.module.css'
import burger from '../../assets/hero/hero-2.png'

function Section1() {
  return (
    <>
    <div className={style.outerContainer}>
        <div className={style.container}>
            <div className={style.burgerImg}>
                <img src={burger} width={600}/>
            </div>
            <div className={style.right}>
                <h1 className={style.new}>NEW</h1>
                <h1 className={style.new}>BURGER</h1>
                <h3 className={style.onion}>WITH OINION</h3>
                <p className={style.des}>Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in iaculis pretium at magna mauris ipsum primis rhoncus feugiat</p>
                <button className={style.order}>ORDER NOW</button>

            </div>
        </div>
    </div>
    
      
    </>
  )
}

export default Section1
