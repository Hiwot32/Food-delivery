import React from 'react'
import style from './header.module.css'
import logo from '../../assets/logo/logo.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Header() {
  return (
    <>
    <div className={style.outerSection}>
        <div className={style.container}>
            <div className={style.logo}>
                <img src={logo} width={200}/>
            </div>
            <div className={style.navLists}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Ouer Menu</a></li>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/"><ShoppingBagOutlinedIcon /></a></li>
                </ul>

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Header
