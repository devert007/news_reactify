import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Seacrh from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constacts";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
const Main = () => {
	const {filters,changeFilter}= useFilters({
		currentPage: 1,
		pageSize: PAGE_SIZE,
		category: null,
		keywords: "",
	});

	
	const totalPages = 10;
	const pageSize = 10;
	const debouncedKeywords = useDebounce(filters.keywords, 1500);

	  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });
	const { data: dataCategories } = useFetch(getCategories);

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
		<main className={styles.main}>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					setSelectedCategory={filters.category}
					selectedCategory={(category) => {
						changeFilter("category", category);
					}}
				/>
			) : null}
			<Seacrh
				keywords={filters.keywords}
				setKeywords={(keywords) => {
					changeFilter("keywords", keywords);
				}}
			/>
			<NewsBanner
				isLoading={isLoading}
				item={data && data.news && data.news[0]}
			/>

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={TOTAL_PAGES}
				currentPage={filters.currentPage}
			/>
			<NewsList isLoading={isLoading} news={data?.news} />

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={TOTAL_PAGES}
				currentPage={filters.currentPage}
			/>
		</main>
	);
};

export default Main;
