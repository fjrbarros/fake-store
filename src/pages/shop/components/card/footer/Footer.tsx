import { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../../../../../store';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../store/cart';
import { IProductData } from '../../../../../shared';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import { QuantityInput } from '../../../../../components';
import { useSelector } from 'react-redux';

interface Props {
  product: IProductData;
}

const CardFooter: React.FC<Props> = ({ product }) => {
  const { price, rating } = product;
  const [quantity, setQuantity] = useState<number>(0);
  const dispatch: AppDispatch = useDispatch();
  const { items } = useSelector((data: RootState) => data.cart);

  useEffect(() => {
    const findProduct = items.find(item => item.id === product.id);
    const newQuantity = findProduct?.quantity || 0;
    setQuantity(newQuantity);
  }, [items, product.id]);

  return (
    <Box padding="25px 0 5px" borderTop="1px solid #ddd">
      <Stack direction="row" justifyContent="space-between" spacing={1}>
        <Stack direction="column" alignItems="center" spacing={1}>
          <Typography component="span" className="price">
            US$ {price}
          </Typography>
          <Rating
            value={rating.rate}
            precision={0.5}
            readOnly
            sx={{ fontSize: '1.2rem' }}
          />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <QuantityInput
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
          <Tooltip title="Add to cart" arrow>
            <span>
              <IconButton
                sx={{ padding: '10px' }}
                onClick={() => dispatch(addToCart({ ...product, quantity }))}
                disabled={quantity <= 0}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </span>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CardFooter;
