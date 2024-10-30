import { formatDate } from "../../helpers/formatDate";
import BannersList from "../../components/BannersList/BannersList";
import styles from "./styles.module.css";
const LatestNews = ({banners,isLoading}) => {
	return (
	<section className={styles.section}>
		<BannersList banners={banners} isLoading={isLoading}/>
	</section>
	);
};
export default LatestNews;
