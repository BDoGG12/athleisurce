// SearchBar.js
import classes from './searchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search products..." />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
