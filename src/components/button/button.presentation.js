import cn from 'classnames';

import style from './button.styles.scss';

const Button = ({ children, className, size = 'md', color, ...props }) => (
  <button class={cn(style.button, className, style[`button--${size}`], style[`button--${color}`])} {...props}>
    {children}
  </button>
);

export default Button;
