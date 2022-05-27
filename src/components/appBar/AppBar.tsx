import { SearchInput, Link } from '..';
import { AppBar as MuiBar, Stack } from '@mui/material';
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
  afterChangeSearchInput?: (value: string) => void;
}

const AppBar: React.FC<Props> = ({
  appBarBgColor = '',
  showButtonTheme = true,
  showButtonShop = true,
  showButtonCart = true,
  showSearchInput = true,
  afterChangeSearchInput,
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
        <Toolbar>
          <Box
            flex={1}
            sx={theme => ({
              display: 'flex',
              [theme.breakpoints.down(600)]: {
                display: 'block',
                padding: '10px',
              },
            })}
          >
            <Box display="flex" flex={1} alignItems="center">
              <Link path="/">
                <Title />
              </Link>
              <Box flex={1} />
              <Box
                sx={theme => ({
                  [theme.breakpoints.down(600)]: {
                    display: 'none',
                  },
                })}
              >
                {showSearchInput && (
                  <SearchInput
                    afterChangeSearchInput={afterChangeSearchInput}
                  />
                )}
              </Box>
              <Stack
                component="nav"
                spacing={1}
                direction="row"
                padding="0 5px"
                alignItems="center"
              >
                {showButtonShop ? (
                  <Link path="/shop">
                    <Shop />
                  </Link>
                ) : (
                  <FilterMenu />
                )}
                {showButtonTheme && <ThemeButton sx={{ color: '#fff' }} />}
                {showButtonCart && <CartButton />}
              </Stack>
            </Box>
            <Box
              sx={theme => ({
                display: 'none',
                [theme.breakpoints.down(600)]: {
                  display: 'block',
                },
              })}
            >
              {showSearchInput && (
                <SearchInput afterChangeSearchInput={afterChangeSearchInput} />
              )}
            </Box>
          </Box>
        </Toolbar>
      </MuiBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default AppBar;
