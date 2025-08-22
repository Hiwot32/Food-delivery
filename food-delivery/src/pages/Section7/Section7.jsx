import React from 'react'
import style from './section7.module.css'
import app from '../../assets/shop/appstore.png'
import google from '../../assets/shop/googleplay.png'
import shop from '../../assets/shop/e-shop.png'

function Section7() {
  return (
    <>
    <div className={style.outerContainer}>
        <div className={style.container}>
            <div className={style.left}>
                <p className={style.download}>DOWNLOAD MOBILE APP AND</p>
                <h1>SAVE UPTO 20%</h1>
                <p class={style.des}>Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius</p>
                <div className={style.imgs}>
                    <div>
                        <img src={app} width={220}/>

                    </div>
                    <div>
                        <img src={google} width={220}/>

                    </div>
                </div>

            </div>
            <div className={style.right}>
                <img src={shop} width={520}/>
                
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Section7
