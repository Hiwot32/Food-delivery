import React from 'react'
import { useState, useEffect } from 'react';
import style from './header.module.css'
import logo from '../../assets/logo/logo.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeOnScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      scrollValue > 100 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changeOnScroll);

    return () => window.removeEventListener("scroll", changeOnScroll);
  }, []);

   
  return (
    <>
    <div className={`${style.outerSection} ${nav ? style.active : ""}`}>
        <div className={style.container}>
            <div className={style.logo}>
                <img src={logo} width={200}/>
            </div>
            <div className={style.navLists}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Ouer Menu</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/"><ShoppingBagOutlinedIcon /></a></li>
                </ul>

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Header
