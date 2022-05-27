import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { ResponsiveText } from '../../../../components';
import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../../../store';
import { resetFilterCategory, resetProductData } from '../../../../store/shop';

const BorderAnimation = styled(Box)(() => ({
  marginTop: '10px',
  position: 'relative',
  padding: '3px',
  background:
    'linear-gradient(60deg, hsl(224, 85%, 66%), hsl(269, 85%, 66%), hsl(314, 85%, 66%), hsl(359, 85%, 66%), hsl(44, 85%, 66%), hsl(89, 85%, 66%), hsl(134, 85%, 66%), hsl(179, 85%, 66%))',
  backgroundSize: '300% 300%',
  borderRadius: '20px',
  animation: 'moveGradient 4s alternate infinite',

  '@keyframes moveGradient': {
    '50%': {
      backgroundPosition: '100% 50%',
    },
  },
}));

const Banner: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Box
        component="section"
        sx={theme => ({
          backgroundImage:
            'url(https://c.pxhere.com/images/52/47/a2047ea538688d7b3d3bfabe3ce7-1447929.jpg!d)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          height: '600px',
          width: '100%',
          position: 'relative',
          [theme.breakpoints.down(600)]: {
            height: '300px',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            background: 'rgb(0,0,0,0.5)',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <ResponsiveText
            component="h1"
            up="4vw"
            down="5vw"
            textTransform="uppercase"
            text="The most complete online store"
          />
          <BorderAnimation>
            <Box sx={{ background: '#222', borderRadius: '20px' }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '30px',
                  border: 'none',
                  color: '#fff',
                  '&:hover': {
                    background: 'transparent',
                    border: 'none',
                  },
                }}
                onClick={() => {
                  dispatch(resetProductData());
                  dispatch(resetFilterCategory());
                  navigate('/shop');
                }}
              >
                Shop now
              </Button>
            </Box>
          </BorderAnimation>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
