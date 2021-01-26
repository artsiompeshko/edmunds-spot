import cn from 'classnames';

import { MAKES } from '../../core/constants/makes';
import { Button } from '../button';
import { Input } from '../input';
import { Select } from '../select';

import style from './search-form.styles';

const SearchForm = ({ make, zipCode, size, onSubmit, onChange, onZipCodeChange }) => (
  <form class={cn(style['search-form'], style[`search-form--${size}`])} onSubmit={onSubmit}>
    {size !== 'sm' && <p>Search Services By:</p>}
    <Select placeholder="Any make" value={make} onChange={onChange}>
      {['Any Make', ...MAKES].map(makeOption => (
        <option value={makeOption}>{makeOption}</option>
      ))}
    </Select>
    <Input placeholder="Zip Code" value={zipCode} onInput={onZipCodeChange} />
    <Button disabled={!zipCode} type="submit" color="primary">
      GO
    </Button>
  </form>
);

export default SearchForm;
