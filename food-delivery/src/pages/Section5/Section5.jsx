import React from 'react'
import style from './section5.module.css'
import image from '../../assets/promotion/pro.png'

function Section5() {
  return (
    <>
    <div className={style.outerContainer}>
      <div className={style.container}>
        <div className={style.left}>
          <img src={image} width={530}/>
        </div>
        <div className={style.right}>
          <h1>NOTHING BRINGS<br /> PEOPLE TOGETHER LIKE <br /> A GOOD BURGER</h1>
          <p>Semper lacus cursus porta primis ligula risus tempus and sagittis ipsum mauris lectus laoreet purus ipsum tempor enim ipsum porta justo integer ultrice aligula lectus aenean magna and pulvinar purus at pretium gravida</p>

          <ul>
            <li>Fringilla risus, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien</li>
            <li>Quaerat sodales sapien euismod purus blandit</li>
            <li>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus mauris</li>
          </ul>

        </div>
      </div>
    </div>
      
    </>
  )
}

export default Section5
