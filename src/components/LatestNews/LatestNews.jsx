import { formatDate } from "../../helpers/formatDate";
import BannersList from "../../components/BannersList/BannersList";
import styles from "./styles.module.css";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";
const LatestNews = ({ }) => {
	const { data, isLoading } = useFetch(getLatestNews);

	return (
		<section className={styles.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	);
};
export default LatestNews;
