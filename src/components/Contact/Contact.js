import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact(props) {
  const { about } = props;

  return (
    <>
      <div className={styles.container}>
        <h1>SURTIPRECIOS LA 15</h1>
        <div className={styles.phone}>
          <h5>Líneas de atención</h5>
          <ul>
            
            <li>(+57) 313 636 4253</li>
          </ul>
        </div>

        <div className={styles.adress}>
          <h5>Ubicación:</h5>
          <p>Cll 15 # 9-65, Centro de Cali</p>
        </div>
      </div>
      <FooterApp />
    </>
  );
}
