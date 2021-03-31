import Link from 'next/link';
import { useAppContext } from '../../../context/state';
import styles from '../../../styles/Item.module.css';

const product = ({ data }) => {
  const sharedState = useAppContext();

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <img className={styles.image} src={data.image} />
      </div>
      <div className={styles.userInteractions}>
        <Link href="/Cart">
          <button
            className={styles.buttons}
            onClick={() => {
              sharedState.setSharedState('cart', data);
              sharedState.setSharedState('cartTotal', data);
            }}
          >
            Add To Cart
          </button>
        </Link>
        <button
          className={styles.buttons}
          onClick={() => sharedState.setSharedState('favorites', data)}
        >
          Favorite Item
        </button>
      </div>
      <div className={styles.productDescription}>
        <h2>{data.title}</h2>
        <h4>${Number(data.price).toFixed(2)}</h4>
        <text className={styles.descriptionText}>{data.description}</text>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=6');
  const data = await res.json();

  const ids = data.map((product) => product.id);
  const paths = ids.map((id) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default product;
