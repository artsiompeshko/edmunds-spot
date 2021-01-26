import { SearchForm } from '../search-form';

import style from './map-search.styles.scss';

const MapSearch = ({ make, zipCode }) => (
  <div class={style['map__search']}>
    <SearchForm initialMake={make} initialZipCode={zipCode} size="sm" />
  </div>
);

export default MapSearch;
