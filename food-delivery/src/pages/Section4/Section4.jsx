import React from "react";
import data from "../../utilities/card";
import style from "./section4.module.css";
import Card from "../../components/Cards/Card";
import chips from "../../assets/menu/ads-1.jpg";

function Section4() {
  return (
    <>
      <div className={style.outerContainer}>
        <div className={style.container}>
          <h1 className={style.title}>OUR CRAZY BURGERS</h1>
          <p className={style.para}>
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
            primis libero tempus, blandit a cursus varius magna
          </p>

          <div className={style.cards}>
            {data.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.paragraph}
                price={item.price}
              />
            ))}
          </div>

          <div className={style.fries}>
            <div className={style.left}>
              <div className={style.des}>
                <p>GET YOUR FREE</p>
                <p className={style.bolder}>CHEES FRIES</p>
                <button className={style.learnBtn}>LEARN MORE</button>
              </div>
            </div>
            <div className={style.right}>
              <div className={style.des}>
                <p>GET YOUR FREE</p>
                <p className={style.bolder}>CHEES FRIES</p>
                <button className={style.learnBtn}>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
