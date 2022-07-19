import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Soy el product {id}</h1>;
};

export default ProductPage;
