import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
const Seacrh = ({ keywords, setKeywords }) => {
	return (
		<div className={styles.search}>
			<input
				type="text"
				value={keywords}
				onChange={(e) => {
										setKeywords(e.target.value);
				}}
				className={styles.input}
			/>
		</div>
	);
};
export default Seacrh;
