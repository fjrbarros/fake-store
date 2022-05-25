import { PageWrapper } from '../../components';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../api';
import { Grid as MuiGrid } from '@mui/material';
import { Alert, Snackbar } from '@mui/material';
import { resetProductError } from '../../store/shop';
import Paper from '@mui/material/Paper';
import Grid from './components/grid/Grid';
import Card from './components/card/Card';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
          <MuiGrid item xs={1} sm={4} md={4} lg={4} key={product.id}>
            <Item elevation={3}>
              <Card product={product} />
            </Item>
          </MuiGrid>
        ))}
      </Grid>
      <Snackbar open={Boolean(error)}>
        <Alert
          variant="outlined"
          severity="error"
          sx={{ width: '100%' }}
          onClose={() => dispatch(resetProductError())}
        >
          {error}
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </PageWrapper>
  );
};

export default Shop;
