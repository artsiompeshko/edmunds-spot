import { Map } from '../../components/map';
import { MapSearch } from '../../components/map-search';

import style from './home-page.styles.scss';

const HomePage = ({ make, zipCode }) => (
  <div class={style.map}>
    <Map make={make || 'Any Make'} zipCode={zipCode} />
    <MapSearch make={make || 'Any Make'} zipCode={zipCode} />
  </div>
);

export default HomePage;
