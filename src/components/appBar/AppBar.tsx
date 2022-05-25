import { SearchInput, Link } from '..';
import { AppBar as MuiBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import { Title, Shop, FilterMenu, ThemeButton } from './components';

interface Props {
  appBarBgColor?: string;
  showButtonTheme?: boolean;
  showButtonShop?: boolean;
}

const AppBar: React.FC<Props> = ({
  appBarBgColor = '',
  showButtonTheme = true,
  showButtonShop = true,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <MuiBar
        elevation={trigger ? 4 : 0}
        sx={{ backgroundColor: appBarBgColor }}
      >
        <Toolbar sx={{ display: 'flex' }}>
          <Link path="/">
            <Title />
          </Link>
          <Box flex={1} />
          {showButtonShop ? (
            <Link path="/shop">
              <Shop />
            </Link>
          ) : (
            <FilterMenu />
          )}
          <SearchInput />
          {showButtonTheme && (
            <ThemeButton sx={{ color: '#fff', marginLeft: '5px' }} />
          )}
        </Toolbar>
      </MuiBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default AppBar;
