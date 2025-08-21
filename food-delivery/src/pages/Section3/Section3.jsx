import React from 'react'
import style from './section3.module.css'
import pizza from '../../assets/about/pizza.png'
import salad from '../../assets/about/salad.png'
import bike from '../../assets/about/delivery-bike.png'

function Section3() {
return (
    <>
    <div className={style.outerContainer}>
        <div className={style.container}>
            <div className={style.first}>
                <img src={pizza} width={100}/>
                <div className={style.title}>
                    <h1>ORGINAL</h1>
                </div>
                <div className={style.des}>
                    <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus</p>

                </div>

            </div>
            <div className={style.second}>
                <img src={salad} width={100}/>
                <div className={style.title}>
                    <h1>Qualty Foods</h1>
                </div>
                <div className={style.des}>
                    <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus</p>
                </div>

            </div>
            <div className={style.third}>
                <img src={bike} width={100}/>
                <div className={style.title}>
                    <h1>Fastest Delivery</h1>
                </div>
                <div className={style.des}>
                    <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus
                         </p>                    
                </div>

            </div>
        </div>
    </div>
    </>
)
}

export default Section3
