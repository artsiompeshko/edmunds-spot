import cn from 'classnames';

import style from './rating.styles.scss';

const Rating = ({ rating }) => (
  <div>
    {[1, 2, 3, 4, 5].map(i => (
      <span
        class={cn('fa fa-star', {
          [style['checked']]: i <= rating,
          [style['unchecked']]: i > rating,
        })}
      />
    ))}
  </div>
);

export default Rating;
