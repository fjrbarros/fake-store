import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeDrawer } from '../../../../store/drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const DrawerFooter: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { subTotal } = useSelector((data: RootState) => data.cart);

  const handleClickViewCart = () => {
    dispatch(closeDrawer());
    navigate('/cart');
  };

  return (
    <Box padding="10px 20px 20px">
      <Box paddingBottom="20px">
        <Typography fontWeight={500} fontSize="1.5rem">
          Subtotal
        </Typography>
        <Typography fontSize="1.4rem">$ {subTotal}</Typography>
      </Box>
      <Button variant="outlined" fullWidth onClick={handleClickViewCart}>
        View Cart
      </Button>
    </Box>
  );
};

export default DrawerFooter;
