import React from 'react'
import style from './card.module.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


function Card({image, title, description, price}) {
  return (
    <div className={style.outerContainer}>
    <div className={style.container}>
        <img src={image} width={280}/>
        <div className={style.bottom}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={style.btns}>
            <div className={style.price}>${price}</div>
            <button className={style.btn}><ShoppingBagOutlinedIcon style={{ fontSize: "17px", paddingRight:"5px" }}/>Add To Cart</button>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Card
