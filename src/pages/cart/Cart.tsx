import { PageWrapper, PaperWrapper, Toast } from '../../components';
import { useState } from 'react';
import { AppDispatch, RootState } from '../../store';
import { resetCart } from '../../store/cart';
import { useSelector, useDispatch } from 'react-redux';
import { DrawerList } from '../../components/drawer/components';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import LoadingButton from '@mui/lab/LoadingButton';

const Cart: React.FC = () => {
  const [isLoading, setIsloading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { subTotal } = useSelector((data: RootState) => data.cart);
  const shipping = Number((subTotal * 0.1).toFixed(2));
  const salesTax = Number((subTotal * 0.15).toFixed(2));

  return (
    <PageWrapper showButtonCart={false} showSearchInput={false}>
      <PaperWrapper>
        <Box
          sx={theme => ({
            display: 'flex',
            padding: '20px',
            [theme.breakpoints.down(600)]: {
              display: 'block',
            },
          })}
        >
          <Box flex={2}>
            <Typography fontSize="2rem">My Cart</Typography>
            <Divider />
            <DrawerList showDescriptionProduct={true} />
          </Box>
          <Box
            sx={theme => ({
              flex: 1,
              marginLeft: '20px',
              [theme.breakpoints.down(600)]: {
                marginLeft: '0px',
                marginTop: '20px',
              },
            })}
          >
            <Typography fontSize="2rem">Order summary</Typography>
            <Divider />
            <List>
              <ListItem sx={{ justifyContent: 'space-between' }}>
                <Typography fontSize="1.5rem">Subtotal</Typography>
                <Typography fontSize="1.5rem">${subTotal}</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: 'space-between' }}>
                <Typography fontSize="1.5rem">Shipping</Typography>
                <Typography fontSize="1.5rem">${shipping}</Typography>
              </ListItem>
              <ListItem sx={{ justifyContent: 'space-between' }}>
                <Typography fontSize="1.5rem">Sales tax</Typography>
                <Typography fontSize="1.5rem">${salesTax}</Typography>
              </ListItem>
            </List>
            <Divider />
            <ListItem
              sx={{ justifyContent: 'space-between', marginTop: '10px' }}
            >
              <Typography fontSize="1.7rem">Total</Typography>
              <Typography fontSize="1.7rem">
                ${Number((subTotal + shipping + salesTax).toFixed(2))}
              </Typography>
            </ListItem>
            <LoadingButton
              variant="outlined"
              disabled={!subTotal}
              loading={isLoading}
              onClick={() => {
                setIsloading(true);
                setTimeout(() => {
                  setIsloading(false);
                  setShowToast(true);
                  dispatch(resetCart());
                }, 5000);
              }}
              sx={{
                marginTop: '20px',
                width: '80%',
                left: '50%',
                transform: 'translate(-50%, 0px)',
              }}
            >
              Checkout
            </LoadingButton>
          </Box>
        </Box>
        <Toast
          open={showToast}
          severity="success"
          onClose={() => setShowToast(false)}
          text="Successful purchase!"
        />
      </PaperWrapper>
    </PageWrapper>
  );
};

export default Cart;
