import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <>
      <div className={styles.topBar}>
        <Link href="/">
          <CardImg src="/image/logo.jpeg" alt="DISTRIBUCIONES VALIZ" />{" "}
        </Link>

        <div className={styles.title}>
          <div className={styles.ano}>
            <p className={styles.text}>CATÁLOGO</p>
            <p className={styles.num}>2023</p>
          </div>
          <p className={styles.name}></p>
          <p className={styles.extra}>DESPACHOS A TODA COLOMBIA</p>
        </div>
      </div>
    </>
  );
}
