import { PageWrapper, Toast, Loading, PaperWrapper } from '../../components';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../api';
import { resetProductError } from '../../store/shop';
import { lower } from '../../utils';
import { IProductData } from '../../shared';
import Card from './components/card/Card';
import Grid from './components/grid/Grid';

const Shop: React.FC = () => {
  const [toHighLight, setToHighLight] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const { filterCategory, products } = useSelector(
    (data: RootState) => data.shop,
  );
  const { data, error, loading } = products;

  useEffect(() => {
    if (!data.length && !filterCategory.length) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, data.length, filterCategory.length]);

  const afterChangeSearchInput = useCallback((value: string) => {
    setToHighLight(value);
  }, []);

  const filterProductsByText = useCallback(
    (product: IProductData): boolean => {
      return (
        lower(product.title).includes(lower(toHighLight)) ||
        lower(product.description).includes(lower(toHighLight)) ||
        lower(product.price.toString()).includes(lower(toHighLight))
      );
    },
    [toHighLight],
  );

  return (
    <PageWrapper
      showButtonShop={false}
      afterChangeSearchInput={afterChangeSearchInput}
    >
      <PaperWrapper>
        <Grid sx={{ padding: '30px 15px' }}>
          {data.filter(filterProductsByText).map(product => (
            <Card
              product={product}
              key={product.id}
              toHighLight={toHighLight}
            />
          ))}
        </Grid>
      </PaperWrapper>
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
