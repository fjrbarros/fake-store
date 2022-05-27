import { SearchInput, Link } from '..';
import { AppBar as MuiBar } from '@mui/material';
import { Title, Shop, FilterMenu, ThemeButton, CartButton } from './components';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';

interface Props {
  appBarBgColor?: string;
  showButtonTheme?: boolean;
  showButtonShop?: boolean;
  showButtonCart?: boolean;
  showSearchInput?: boolean;
}

const AppBar: React.FC<Props> = ({
  appBarBgColor = '',
  showButtonTheme = true,
  showButtonShop = true,
  showButtonCart = true,
  showSearchInput = true,
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
          {showSearchInput && <SearchInput />}
          {showButtonTheme && (
            <ThemeButton sx={{ color: '#fff', marginLeft: '5px' }} />
          )}
          {showButtonCart && <CartButton />}
        </Toolbar>
      </MuiBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default AppBar;
