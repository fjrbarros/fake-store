import { styled } from '@mui/material/styles';
import { openDrawer } from '../../../../store/drawer';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: '#ff0000d4',
    padding: '0 4px',
    color: '#fff',
  },
}));

const CartButton: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items } = useSelector((data: RootState) => data.cart);

  return (
    <IconButton sx={{ color: '#fff' }} onClick={() => dispatch(openDrawer())}>
      <StyledBadge badgeContent={items.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default CartButton;
