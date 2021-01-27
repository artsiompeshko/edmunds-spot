import { useCallback, useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';

import SearchFrom from './search-form.presentation';

const SearchFormContainer = ({ size = 'md', initialMake, initialZipCode }) => {
  const [make, setMake] = useState(initialMake);
  const [zipCode, setZipCode] = useState(initialZipCode);

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      event.stopPropagation();

      route(`/map?make=${make}&zipCode=${zipCode}`, true);
    },
    [make, zipCode],
  );

  const onChange = useCallback(
    event => {
      setMake(event.target.value);
    },
    [setMake],
  );

  const onZipCodeChange = useCallback(
    event => {
      setZipCode(event.target.value);
    },
    [setZipCode],
  );

  useEffect(() => {
    if (initialZipCode) {
      setZipCode(initialZipCode);
    }
  }, [initialZipCode]);

  return (
    <SearchFrom
      make={make}
      size={size}
      zipCode={zipCode}
      onSubmit={onSubmit}
      onChange={onChange}
      onZipCodeChange={onZipCodeChange}
    />
  );
};

export default SearchFormContainer;
