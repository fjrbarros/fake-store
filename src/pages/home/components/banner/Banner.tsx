import Box from '@mui/material/Box';
import { ResponsiveText } from '../../../../components';

const Banner: React.FC = () => {
  return (
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
      </Box>
    </Box>
  );
};

export default Banner;
