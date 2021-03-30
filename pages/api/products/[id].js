// export default async function handler({ query: { id } }, res) {
//   const data = await fetch('https://fakestoreapi.com/products?limit=6');
//   const products = await data.json();
//   const product = products.filter((product) => product.id == id);
//   return res.status(200).json(product[0]);
// }
