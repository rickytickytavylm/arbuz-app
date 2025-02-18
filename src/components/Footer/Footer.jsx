import s from "./Footer.module.css";
import { useState } from "react";

export const Footer = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <div className={s.footer__contacts}>
          <a href="#">
            <div className={s.logo}>Estate</div>
          </a>
          <div className={s.contacts}>
            <a href="https://yandex.ru/maps/213/moscow/?ll=37.617700%2C55.755863&z=10">
              Москва, БЦ «Глория», ул. Ленина, 19
            </a>
            <a href="tel:+7 999 854 85 85">+7 999 854 85 85 — Москва</a>
            <a href="tel:+7 914 487 38 38">+7 914 487 38 38 — Владивосток</a>
            <a href="mailto:hello@estate.ru">hello@estate.ru</a>
            <div className={s.social__icons}>
              <a href="https://t.me">
                <img src="/src/assets/Telegram__icon-big.svg" alt="Telegram" />
              </a>
              <a href="https://www.whatsapp.com/">
                <img src="/src/assets/WhatsApp__icon_big.svg" alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
        <div className={s.footer__info}>
          <div className={s.footer__nav}>
            <div className={s.nav__links}>
              <a href="">О компании</a>
              <a href="">О нас</a>
              <a href="">Команда</a>
              <a href="">Контакты</a>
              <a href="">Блог</a>
            </div>
            <div className={s.nav__links}>
              <button 
                className={`${s.dropdown_button} ${activeMenu === 'real-estate' ? s.active : ''}`}
                onClick={() => toggleMenu('real-estate')}
              >
                Недвижимость
                <span className={s.arrow}></span>
              </button>
              <div className={`${s.dropdown_content} ${activeMenu === 'real-estate' ? s.show : ''}`}>
                <a href="">Жилая</a>
                <a href="">Коммерческая</a>
                <a href="">Инвестиционная</a>
              </div>
            </div>
            <div className={s.nav__links}>
              <button 
                className={`${s.dropdown_button} ${activeMenu === 'services' ? s.active : ''}`}
                onClick={() => toggleMenu('services')}
              >
                Услуги
                <span className={s.arrow}></span>
              </button>
              <div className={`${s.dropdown_content} ${activeMenu === 'services' ? s.show : ''}`}>
                <a href="">По подбору недвижимости</a>
                <a href="">Юридическое сопровождение</a>
              </div>
            </div>
          </div>
          <div className={s.copyright}>
            <p> 2025 Estate. Все права защищены. При копировании материалов сайта ссылка на источник обязательна. <a href="">Политика конфиденциальности</a> • <a href="">Соглашение об использовании</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
