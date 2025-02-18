import s from "./Header.module.css";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !burgerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={s.header}>
      <div className={s.logo}>Estate</div>

      <div className={s.menu_controls}>
        <button onClick={toggleTheme} className={s.theme_toggle}>
          <div className={`${s.toggle_slider} ${isDarkTheme ? s.toggle_slider_dark : ''}`}>
            <div className={s.toggle_knob}></div>
          </div>
        </button>
        <a className={s.contacts__language} href="">En</a>
        <button ref={burgerRef} className={s.burger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div ref={menuRef} className={`${s.nav__buttons} ${isMenuOpen ? s.nav__buttons_active : ''}`}>
        <button className={`${s.nav__button} ${s.dropdown}`}>
          Недвижимость
        </button>
        <button className={s.nav__button}>Услуги</button>
        <button className={s.nav__button}>Блог</button>
        <button className={s.nav__button}>О компании</button>
      </div>

      <div className={s.contacts}>
        <div className={s.contacts__icons}>
          <a href="https://t.me">
            <img
              className={s.contacts__icon}
              src="/src/assets/Telegram.svg"
              alt="TelegramLogo"
            />
          </a>
          <a href="https://www.whatsapp.com/">
            <img
              className={s.contacts__icon}
              src="/src/assets/whatsapp.svg"
              alt="WhartsAppLogo"
            />
          </a>
        </div>
        <a href="tel:+7 998 854 85 85" className={s.contacts__number}>
          +7 998 854 85 85
        </a>
      </div>
    </header>
  );
};
