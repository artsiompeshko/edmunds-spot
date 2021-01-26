import style from './select.styles.scss';

const Select = ({ children, ...props }) => (
  <select class={style.select} {...props}>
    {children}
  </select>
);

export default Select;
