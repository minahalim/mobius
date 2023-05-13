import styles from "./playground.module.css";
import cave from "../../assets/cave.jpeg";
import dog from "../../assets/dog.jpeg";
import man from "../../assets/man2.jpeg";
import house from "../../assets/house.jpeg";
import stil from "../../assets/stil.jpeg";

export default function Plalyground() {
  return (
    <>
      <div className={styles.title}>Text to Image</div>
      <div className={styles.subTitle}>
        Easily create an image from scratch with our AI image generator by
        enetring descriptive text.
      </div>
      <div className={styles.table}>
        <div className={styles.wrapper}>
          <div className={`${styles.rest} ${styles.big}`}>
            <img className={styles.pic} src={cave} alt="" />
          </div>
          <div className={styles.rest}>
            <img className={styles.pic} src={stil} alt="" />
          </div>
          <div className={styles.rest}>
            <img className={styles.pic} src={dog} alt="" />
          </div>
          <div className={styles.rest}>
            <img className={styles.pic} src={man} alt="" />
          </div>
          <div className={styles.rest}>
            <img className={styles.pic} src={house} alt="" />
          </div>
        </div>
        <div>
          <div className={styles.promptWrapper}>
            <label className={styles.promptLabel}>Prompt</label>
            <textarea
              placeholder="Describe an image you want to generate..."
              className={styles.textArea}
            ></textarea>
            <button className={styles.generateButton}>Generate</button>
          </div>
        </div>
      </div>
    </>
  );
}
