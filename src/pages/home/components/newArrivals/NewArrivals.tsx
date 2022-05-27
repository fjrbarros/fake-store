import Box from '@mui/material/Box';
import { ResponsiveText } from '../../../../components';

const NewArrivals: React.FC = () => {
  return (
    <Box
      component="section"
      sx={theme => ({
        width: '100%',
        display: 'flex',
        [theme.breakpoints.down(600)]: {
          display: 'block',
        },
      })}
    >
      <Box
        sx={theme => ({
          width: '100%',
          height: '600px',
          background: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textTransform: 'uppercase',
          color: '#fff',
          [theme.breakpoints.down(600)]: {
            height: '300px',
          },
        })}
      >
        <ResponsiveText
          up="4vw"
          down="5vw"
          text="new arrivals"
          textTransform="uppercase"
        />
      </Box>

      <Box
        sx={theme => ({
          height: '600px',
          width: '100%',
          background:
            'url(https://5.imimg.com/data5/AV/BC/OM/SELLER-8957447/gold-jewelry-500x500.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          [theme.breakpoints.down(600)]: {
            height: '300px',
          },
        })}
      />
    </Box>
  );
};

export default NewArrivals;
