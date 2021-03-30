import FavoritesContainer from '../containers/FavoritesContainer';
import { useAppContext } from '../context/state';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.landingCont}>
      <img
        className={styles.landingImg}
        alt="image of a shopping bag"
        src="/assets/shoppingBag.jpg"
      ></img>
      <Link href="/Shop">
        <button className={styles.shopBtn}>SHOP NOW</button>
      </Link>
      <FavoritesContainer />
    </div>
  );
}
