import { Box, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ResponsiveText } from '../../components';

const Container = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#030217',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ButtonHome = styled(Button)(() => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border: '1px solid transparent',
  color: '#ffffff',
  textTransform: 'none',
  marginTop: '15px',
  '&:hover': {
    border: '1px solid #ffffff',
    backgroundColor: 'transparent',
  },
}));

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <ResponsiveText up="6vw" down="6vw" text="404" />
        <ResponsiveText up="3vw" down="3vw" text="Whoops! Page not found!" />
        <ButtonHome sx={{}} onClick={() => navigate('/')}>
          Home
        </ButtonHome>
      </Box>
    </Container>
  );
};

export default NotFound;
