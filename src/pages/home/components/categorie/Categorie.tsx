import {
  changeFilterCategory,
  resetProductData,
  resetFilterCategory,
} from '../../../../store/shop';
import { ResponsiveText } from '../../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { useNavigate } from 'react-router-dom';
import { fetchProductsByCategory } from '../../../../api';
import { getImageUrl } from '../../../../utils';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Categories: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((data: RootState) => data.shop.categories);
  const navigate = useNavigate();

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
            sx={{
              width: '100%',
              height: '300px',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '100%',
                backgroundColor: 'black',
                backgroundImage: `url(${urlImage})`,
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
              }}
            >
              <Box
                sx={{
                  display: 'none',
                  height: '100%',
                  width: '100%',
                  background: 'rgb(0,0,0,0.5)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
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
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Categories;
