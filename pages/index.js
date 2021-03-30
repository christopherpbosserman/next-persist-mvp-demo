import FavoritesContainer from '../containers/FavoritesContainer';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.landingCont}>
      <img
        className={styles.landingImg}
        alt="image of some clothes"
        src="/assets/landingImg.jpeg"
      ></img>
      <Link href="/Shop">
        <button className={styles.shopBtn}>SHOP NOW</button>
      </Link>
      <FavoritesContainer />
    </div>
  );
}
