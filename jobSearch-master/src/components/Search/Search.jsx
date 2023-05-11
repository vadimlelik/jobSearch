import Button from "../Button";
import { ReactComponent as SearchIcon } from "./icon/search_icon.svg";
import style from "./Search.module.css";

const Search = ({ value }) => (
    <div className={style.SearchInputWrapper}>
        <input
            className={style.SearchInput}
            placeholder="Введите название вакансии"
            value={value}
        />
        <Button className={style.SearchButton}>Поиск</Button>
        <SearchIcon />
    </div>
);

export default Search;
