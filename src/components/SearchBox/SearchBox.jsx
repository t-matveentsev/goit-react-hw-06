import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <input
        className={s.searchInput}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
        placeholder="Search contact"
      />
    </div>
  );
};

export default SearchBox;
