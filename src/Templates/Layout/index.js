import Menu from "../../components/Menu";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Menu />
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
}
