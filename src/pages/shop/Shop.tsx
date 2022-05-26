import { PageWrapper, Toast, Loading } from '../../components';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../api';
import { resetProductError } from '../../store/shop';
import Card from './components/card/Card';
import Grid from './components/grid/Grid';

const Shop: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    filterCategory,
    products: { data, error, loading },
  } = useSelector((data: RootState) => data.shop);

  useEffect(() => {
    if (!data.length && !filterCategory.length) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, data.length, filterCategory.length]);

  return (
    <PageWrapper showButtonShop={false}>
      <Grid>
        {data.map(product => (
          <Card product={product} key={product.id} />
        ))}
      </Grid>
      <Toast
        open={Boolean(error)}
        severity="error"
        onClose={() => dispatch(resetProductError())}
        text={error}
      />
      <Loading open={loading} />
    </PageWrapper>
  );
};

export default Shop;
