import s from "./SearchBox.module.css";

const SearchBox = ({ searchField, inputSearch }) => {
  return (
    <div>
      <input
        className={s.searchInput}
        type="text"
        name="searchInput"
        value={searchField}
        onChange={inputSearch}
        placeholder="Search contact"
      />
    </div>
  );
};

export default SearchBox;
