import styles from "./styles.module.css";

const Skeleton = ({ count = 1, type = "banner", direction = "column" }) => {
	return (
		<>
			{count > 1 ? (
				<ul className={direction === "column" ? styles.column : styles.rows}>
					{[...Array(count)]?.map((_, index) => (
						<li
							key={index}
							className={type === "banner" ? styles.banner : styles.item}
						></li>
					))}
				</ul>
			) : (
				<li className={type === "banner" ? styles.banner : styles.item}></li>
			)}
		</>
	);
};

export default Skeleton;
