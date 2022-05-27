import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { closeDrawer } from '../../store/drawer';
import { styled } from '@mui/material';
import { Drawer as MuiDrawer } from '@mui/material';
import { DrawerHeader, DrawerList, DrawerFooter } from './components';
import Box from '@mui/material/Box';

const DrawerWrapper = styled(Box)(() => ({
  width: '350px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const Drawer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen } = useSelector((data: RootState) => data.drawer);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        (event as React.KeyboardEvent).key !== 'Escape'
      ) {
        return;
      }

      dispatch(closeDrawer());
    };

  return (
    <MuiDrawer anchor="right" open={isOpen} onClose={toggleDrawer()}>
      <DrawerWrapper role="presentation" onKeyDown={toggleDrawer()}>
        <DrawerHeader />
        <Box flex={1} overflow="auto">
          <DrawerList />
        </Box>
        <DrawerFooter />
      </DrawerWrapper>
    </MuiDrawer>
  );
};

export default Drawer;
