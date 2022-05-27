import Paper from '@mui/material/Paper';

interface Props {
  children: React.ReactNode;
}

const PaperWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      sx={theme => ({
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight})`,
        borderRadius: '0px',
        [theme.breakpoints.down(600)]: {
          minHeight: `calc(100vh - 60px)`,
        },
      })}
    >
      {children}
    </Paper>
  );
};

export default PaperWrapper;
