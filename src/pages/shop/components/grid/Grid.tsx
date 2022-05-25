import Paper from '@mui/material/Paper';
import { Grid as MuiGrid } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
  return (
    <MuiGrid
      component={Paper}
      elevation={0}
      borderRadius={0}
      container
      paddingRight={2}
      paddingBottom={2}
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 1, sm: 8, md: 12, lg: 16 }}
      sx={theme => ({
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight})`,
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
        marginLeft: '0px!important',
        marginTop: '0px!important',
        width: '100%!important',
        [theme.breakpoints.down(600)]: {
          height: `calc(100vh - 60px)`,
        },
      })}
    >
      {children}
    </MuiGrid>
  );
};

export default Grid;
