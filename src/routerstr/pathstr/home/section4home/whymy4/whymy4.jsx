import React from "react";
import c from './whymy4.module.css'
import iconsinfo1 from "./whymyimg/1.jpg"
import iconsinfo2 from "./whymyimg/2.jpg"
import iconsinfo3 from "./whymyimg/3.jpg"
import iconsinfo4 from "./whymyimg/4.jpg"
import iconsinfo5 from "./whymyimg/5.jpg"
import iconsinfo6 from "./whymyimg/6.jpg"


const Whymy4 = () => {
    return (
      <div>
        <div className="line">
          <b>ПОЧЕМУ МЫ</b>
        </div>
        <div className={c.whymy}>
          <div className={c.container}>
            <div>
              <div>
                <img src={iconsinfo1} alt="" />
              </div>
              <div>
                <b>
                  Оперативная <br /> доставка
                </b>
                <p>
                  Доставляем по Алматы и по Казахстану.
                  <br />
                  Упаковываем качественно и с любовью.
                  <br />
                  Страховка включена при отправке товаров.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={iconsinfo4} alt="" />
              </div>
              <div>
                <b>
                  Гарантия <br /> на товар
                </b>
                <p>
                  Предоставляем гарантию на купленный у нас <br />
                  товар до 6 месяцев.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={iconsinfo2} alt="" />
              </div>
              <div>
                <b>
                  Прямые
                  <br /> поставки
                </b>
                <p>
                  Сотрудничаем напрямую с поставщиками из
                  <br />
                  разных стран и выбираем только лучший товар.
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className={c.container}>
            <div>
              <div>
                <img src={iconsinfo5} alt="" />
              </div>
              <div>
                <b>
                  Рассрочка <br /> на товары
                </b>
                <p>
                  Предоставляем беспроцентную рассрочку,
                  <br />
                  кредит и KASPIRED
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={iconsinfo3} alt="" />
              </div>
              <div>
                <b>
                  Работаем <br /> с 2019 года
                </b>
                <p>
                  Свой магазин интернет магазин . Наши продавцы
                  <br />
                  грамотно проконсультируют и помогут подобрать
                  <br />
                  товар.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={iconsinfo6} alt="" />
              </div>
              <div>
                <b>
                  Отправили более <br /> 2000 заказов
                </b>
                <p>
                  Сотни довольных клиентов. Мы заботимся о<br />
                  нашей репутации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Whymy4;