import cn from 'classnames';

import style from './input.style.scss';

const Input = ({ size = 'md', ...props }) => <input class={cn(style.input, style[`input--${size}`])} {...props} />;

export default Input;
