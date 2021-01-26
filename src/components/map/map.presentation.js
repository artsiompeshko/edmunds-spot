import { DealersNav } from './dealers-nav';
import style from './map.styles.scss';

const Map = ({ dealers, zipCode, dealersLoading, activeDealerId, onDealerClick }) => (
  <div class={style['map__wrapper']}>
    <div class={style.map} id="mapid" />
    {zipCode && (
      <div class={style['map__nav']}>
        <DealersNav
          dealers={dealers}
          dealersLoading={dealersLoading}
          activeDealerId={activeDealerId}
          onDealerClick={onDealerClick}
        />
      </div>
    )}
  </div>
);

export default Map;
