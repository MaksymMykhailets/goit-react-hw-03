import { useId } from 'react';

const SearchBox = ({ filter, setFilter }) => {
  const searchId = useId();

  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        value={filter}
        id={searchId}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
