import cn from 'classnames';

import style from './style.scss';

const Header = () => (
  <header class={style.header}>
    <h1>
      <a href="/">
        <img src="/assets/icons/edmunds-logo.svg" />
      </a>
    </h1>
    <a class={cn(style['header__link'])} href="/">
      New Car Pricing
    </a>
    <a class={cn(style['header__link'])} href="/">
      Used Cars for Sales
    </a>
    <a class={cn(style['header__link'], style['header__link--active'])} href="/">
      Service Appointment
    </a>
    <a class={cn(style['header__link'])} href="/">
      Car Reviews
    </a>
  </header>
);

export default Header;
