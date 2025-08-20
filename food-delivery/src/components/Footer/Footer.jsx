import React from 'react'
import style from './footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <>
        <div className={style.outerSection}>
            <div className={style.container}>
               <div className={style.lists}>
                <ul>
                    <li className={style.title}>LOCATION</li>
                    <li>5505 Waterford District</li>
                    <li>Dr, Miami, FL 33126</li>
                    <li>United States</li>
                </ul>

                <ul>
                    <li className={style.title}>WORKING HOURS</li>
                    <li>Mon-Fri: 9:00AM - 10:00PM</li>
                    <li>Saturday: 10:00AM - 8:30PM</li>
                    <li>Sunday: 12:00PM - 5:00PM</li>
                </ul>

                <ul>
                    <li className={style.title}>ORDER NOW</li>
                    <li>Hot & Fresh Food Anytime, Anywhere</li>
                    <li className={style.number}><a href="/">999-888-7777</a></li>
                </ul>

                <ul>
                    <li className={style.title}>FOLOW US</li>
                    <li>Stay connected for the latest deals & offers</li>
                    <ul className={style.icons}>
                        <li><a href="/"><FacebookIcon /></a></li>
                        <li><a href="/"><TwitterIcon /></a></li>
                        <li><a href="/"><InstagramIcon /></a></li>
                        <li><a href="/"><YouTubeIcon /></a></li>
                    </ul>
                </ul>
                </div>

                <hr />
                <div className={style.buttom}>
                    <ul>
                        <li>&copy;2023 <span>CODE4EDUCATION.</span> All Rights Reserved</li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Terms Of Use</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                     

                </div>

            </div>
            
        </div>

      
    </>
  )
}

export default Footer
