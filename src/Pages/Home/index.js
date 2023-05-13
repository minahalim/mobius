import styles from "./home.module.css";
import image1 from '../../assets/portrait-4.jpeg';
import image2 from '../../assets/portrait-5.jpeg';
import image3 from '../../assets/portrait-6.jpeg';
import image4 from '../../assets/portrait-7.jpeg';
import image5 from '../../assets/portrait-8.jpeg';
import image6 from '../../assets/portrait-9.jpeg';
import image7 from '../../assets/portrait-10.jpeg';

export default function App() {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <img src={image1} alt="" className={styles.img1} />
        <img src={image2} alt="" className={styles.img2} />
        <img src={image3} alt="" className={styles.img3} />
        <img src={image4} alt="" className={styles.img4} />
        <img src={image5} alt="" className={styles.img5} />
        <img src={image6} alt="" className={styles.img6} />
        <img src={image7} alt="" className={styles.img7} />
      </div>
      <div className={styles.content}>
        We're a new generative AI startup. Our mission is to make creative
        expression universally accessible, fun, and efficient, and help humans
        become orders of magnitude more creative.
      </div>
    </>
  );
}
