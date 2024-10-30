import { getCategories } from "../../api/apiNews";
import { TOTAL_PAGES } from "../../constants/constacts";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import NewsBanner from "../NewsBanner/NewsBanner";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import Seacrh from "../Search/Search";
import styles from "./styles.module.css";
const NewsByFilters = ({filters,changeFilter,isLoading,news}) => {

	const handleNextPage = () => {
		if (filters.currentPage < TOTAL_PAGES) {
			changeFilter("pageNumber", filters.currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (filters.currentPage > 1) {
			setCurrentPage("pageNumber", filters.currentPage - 1);
		}
	};

	const handlePageClick = (pageNumber) => {
		setCurrentPage("pageNumber", pageNumber);
	};

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} changeFilter={changeFilter}/>
			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={TOTAL_PAGES}
				currentPage={filters.currentPage}
			/>
			<NewsList isLoading={isLoading} news={news} />

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={TOTAL_PAGES}
				currentPage={filters.currentPage}
			/>
		</section>
	);
};
export default NewsByFilters;
