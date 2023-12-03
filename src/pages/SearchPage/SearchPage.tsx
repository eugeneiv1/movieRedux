import {Search} from "../../components/Search/Search";
import css from './SearchPage.module.css'

const SearchPage = () => {
    return (
        <div className={css.Search}>
            <Search/>
        </div>
    );
};

export {SearchPage};