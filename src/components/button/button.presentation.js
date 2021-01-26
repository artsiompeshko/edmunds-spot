import cn from 'classnames';

import style from './button.styles.scss';

const Button = ({ children, size = 'md', color, ...props }) => (
  <button class={cn(style.button, style[`button--${size}`], style[`button--${color}`])} {...props}>
    {children}
  </button>
);

export default Button;
