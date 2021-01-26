import cn from 'classnames';
import Loading from '../../loading/loading.presentation';

import style from './dealers-nav.styles.scss';

const DealersNav = ({ dealers, dealersLoading, activeDealerId, onDealerClick }) => (
  <nav class={style['dealers-nav']}>
    {dealersLoading ? (
      <div class={style['dealers-nav__center']}>
        <Loading />
      </div>
    ) : (
      <ul>
        {!dealers?.length && <p class={style['dealers-nav__center']}>No Matched Dealers :&#40;</p>}
        {dealers?.map(dealer => (
          <li
            class={cn({
              [style['dealers-nav__item--active']]: activeDealerId === dealer.id,
            })}
            onClick={() => onDealerClick(dealer.id)}
          >
            <div>
              <p class={style['dealers-nav__name']}>{dealer.name}</p>
            </div>
            <div class={style['dealers-nav__address']}>
              <p class={style['dealers-nav__address-line']}>{dealer.address.street}</p>
              <p class={style['dealers-nav__address-line']}>
                {dealer.address.city}, {dealer.address.stateCode} {dealer.address.zip}
              </p>
            </div>
          </li>
        ))}
      </ul>
    )}
  </nav>
);

export default DealersNav;
