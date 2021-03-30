import Link from 'next/link';
import { useAppContext } from '../../../context/state';

const imageStyles = {
  // border: '3px solid green',
  height: '500px',
  width: '800px',
};

const descriptionStyles = {
  // border: '3px solid red',
};

const product = ({ data }) => {
  const sharedState = useAppContext();
  console.log('shared state in product page: ', sharedState);
  return (
    <div className="product-container">
      <div className="product-image" style={imageStyles}>
        <img src={data.image} height="400px" width="400px" />
      </div>
      <div className="product-description" style={descriptionStyles}>
        <h2>{data.title}</h2>
        <h4>${data.price}</h4>
        <p>{data.description}</p>
      </div>
      <div className="user-interactions">
        <Link href="/Cart">
          <button
            onClick={() => {
              sharedState.setSharedState('cart', data);
            }}
          >
            Add To Cart
          </button>
        </Link>
        <button onClick={() => sharedState.setSharedState('favorites', data)}>
          Add To Favorites
        </button>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  console.log('getStaticProps fired...');
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const data = await res.json();
  console.log('getStaticProps data:', data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  console.log('getStaticPaths fired...');
  const res = await fetch('https://fakestoreapi.com/products?limit=6');
  const data = await res.json();

  const ids = data.map((product) => product.id);
  console.log('ids', ids);
  const paths = ids.map((id) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });
  console.log('paths', paths);

  return {
    paths,
    fallback: false,
  };
};

export default product;
