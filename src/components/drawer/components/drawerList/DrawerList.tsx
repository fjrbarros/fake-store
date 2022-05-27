import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { addToCart, removeToCart } from '../../../../store/cart';
import { QuantityInput, Img } from '../../..';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material';

const TextEllipsis = styled(Typography)(() => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

interface Props {
  showDescriptionProduct?: boolean;
}

const DrawerList: React.FC<Props> = ({ showDescriptionProduct }) => {
  const dispatch: AppDispatch = useDispatch();
  const { items } = useSelector((data: RootState) => data.cart);

  return (
    <List>
      {items.map(product => (
        <Fragment key={product.id}>
          <ListItem
            sx={{
              position: 'relative',
              paddingTop: '25px',
              paddingRight: '30px',
              '&:hover': {
                '& .button-remove': {
                  opacity: 1,
                },
              },
            }}
          >
            <IconButton
              className="button-remove"
              sx={{
                opacity: 0,
                transition: 'all 0.5s',
                position: 'absolute',
                top: 2,
                right: 2,
              }}
              onClick={() => dispatch(removeToCart(product))}
            >
              <ClearIcon />
            </IconButton>
            <ListItemIcon
              sx={{ width: '70px', height: '70px', marginRight: '15px' }}
            >
              <Img src={product.image} alt={product.title} />
            </ListItemIcon>
            <Box display="inline-grid">
              <TextEllipsis>{product.title}</TextEllipsis>
              {showDescriptionProduct && (
                <TextEllipsis margin="2px 0">
                  {product.description}
                </TextEllipsis>
              )}
              <TextEllipsis>US$ {product.price}</TextEllipsis>
              <QuantityInput
                value={product.quantity}
                onChange={({ target }) => {
                  const updatedProduct = {
                    ...product,
                    quantity: target.value,
                  };
                  dispatch(addToCart(updatedProduct));
                }}
              />
            </Box>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default DrawerList;
