import s from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.hero__content}>
        <div className={s.text__container}>
          <h1 className={s.hero__title}>
            Доверие и сервисная модель – основные показатели успеха в работе компании.
          </h1>

          <p className={s.hero__text}>
            Рынок недвижимости в 2025 году сталкивается с серьезными вызовами.
            Изменились ключевые тенденции и запросы инвесторов.
          </p>
          <p className={s.hero__text}>
            Объективный подход к анализу рынка, детальное изучение перспектив
            объектов, эффективные бизнес-модели <br /> и подтвержденная
            ликвидность — всё это способствует сохранению <br /> и увеличению
            капитала наших инвесторов.
          </p>
        </div>

        <div className={s.button__container}>
          <button className={s.hero__button}>
            <span className={s.button__text}>Связаться напрямую</span>
          </button>
          <div className={s.social__icons}>
            <a href="">
              <img src="/src/assets/linkedIn.svg" alt="LinkedIn" />
            </a>
            <a href="">
              <img src="/src/assets/Insta.svg" alt="Insta" />
            </a>
          </div>
        </div>
      </div>
      <img className={s.ceo__img} src="/src/assets/CEO.webp" alt="Ярослав Плотов" />
        <div className={s.ceo__info}>
          <h2 className={s.ceo__name}>Ярослав Плотов</h2>
          <p className={s.ceo__position}>CEO Estate</p>
        </div>
    </section>
  );
};
