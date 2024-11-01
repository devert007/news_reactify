import Image from "../Image/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
const BannersList = ({ banners }) => {
	return (
		<ul className={styles.banner}>
			{banners?.map((banner) => {
				return <NewsBanner key={banner.id} item={banner} />;
			})}
		</ul>
	);
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10,'row');
export default BannersList;
