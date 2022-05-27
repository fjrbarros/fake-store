import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store';
import { closeDrawer } from '../../../../store/drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DrawerHeader: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Box padding="28px" position="relative">
      <IconButton
        onClick={() => dispatch(closeDrawer())}
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translate(10px, -50%)',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <Typography fontSize="1.5rem" textAlign="center">
        CART
      </Typography>
    </Box>
  );
};

export default DrawerHeader;
