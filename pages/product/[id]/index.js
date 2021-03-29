const product = () => {
  return (
    <>
      <h1>This is a Product Page</h1>
      <p>This is the description.</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  console.log('getStaticProps fired...');
  const res = await fetch(
    `http://localhost:3000/api/products/${context.params.id}`
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
    // console.log('id in map', id);
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
