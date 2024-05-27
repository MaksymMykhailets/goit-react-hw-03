import { useId } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  const searchId = useId();

  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        value={filter}
        id={searchId}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
