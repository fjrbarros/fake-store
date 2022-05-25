import { ResponsiveText } from '../../../../components';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box
      id="teste"
      component="section"
      sx={{
        height: '600px',
        width: '100%',
        display: 'flex',
        backgroundColor: 'black',
        backgroundImage:
          'url(https://c.pxhere.com/photos/34/2e/blue_reflection_home_glass_blackbackground_crystal_object_sparkle-384120.jpg!d)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={theme => ({
          height: '100%',
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          [theme.breakpoints.down(600)]: {
            width: '100%',
            background: 'rgb(0,0,0,0.5)',
          },
        })}
      >
        <ResponsiveText
          up="3vw"
          down="4vw"
          textTransform="uppercase"
          text="about us"
        />
        <Typography color="#ffffff" textAlign="justify" padding="0 15px">
          &nbsp;&nbsp;&nbsp;&nbsp; Nice to meet you! We are an online
          multi-product retailer located near Salt Lake City in the shadow of
          the Wasatch Mountains. Since our inception in 1999, Fake store has
          evolved from a fledgling startup to a billion dollar online retailer
          as a result of a creative and hardworking team.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
