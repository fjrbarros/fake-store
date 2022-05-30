import { useEffect } from 'react';
import {
  changeFilterCategory,
  resetProductData,
  resetFilterCategory,
} from '../../../../store/shop';
import { ResponsiveText } from '../../../../components';
import { styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { useNavigate } from 'react-router-dom';
import { fetchCategories, fetchProductsByCategory } from '../../../../api';
import { getImageUrl } from '../../../../utils';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Container = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  backgroundColor: 'black',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'all 1s',
  '&:hover': {
    transform: 'scale(1.2)',
    '&>div': {
      display: 'flex',
    },
  },
}));

const ContainerShop = styled(Box)(() => ({
  display: 'none',
  height: '100%',
  width: '100%',
  background: 'rgb(0,0,0,0.5)',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const Categories: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((data: RootState) => data.shop.categories);

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, data.length]);

  const handleClickShopNow = (category: string) => {
    dispatch(resetFilterCategory());
    dispatch(changeFilterCategory(category));
    dispatch(resetProductData());
    dispatch(fetchProductsByCategory());
    navigate('/shop');
  };

  return (
    <Box
      component="section"
      sx={theme => ({
        display: 'flex',
        [theme.breakpoints.down(600)]: {
          display: 'block',
        },
      })}
    >
      {data.map(category => {
        const urlImage = getImageUrl(category);
        return (
          <Box
            key={category}
            sx={{ width: '100%', height: '300px', overflow: 'hidden' }}
          >
            <Container sx={{ backgroundImage: `url(${urlImage})` }}>
              <ContainerShop>
                <ResponsiveText
                  up="1.5vw"
                  down="4vw"
                  textTransform="uppercase"
                  text={category}
                />
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleClickShopNow(category)}
                  sx={{
                    borderRadius: '30px',
                    marginTop: '5px',
                    color: '#fff',
                    border: '1px solid #fff',
                  }}
                >
                  Shop now
                </Button>
              </ContainerShop>
            </Container>
          </Box>
        );
      })}
    </Box>
  );
};

export default Categories;
