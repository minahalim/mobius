import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menuWrapper}>
      <Link to="/">
        <div className={`${styles.menuItem} ${styles.logo}`}>Mobius</div>
      </Link>

      <div className={styles.innerMenu}>
        <Link to={`/community-showcase`}>
          <div className={`${styles.menuItem}`}>Community Showcase</div>
        </Link>
        <Link to={`/playground`}>
          <div className={`${styles.menuItem}`}>Playground</div>
        </Link>
      </div>
    </div>
  );
}
