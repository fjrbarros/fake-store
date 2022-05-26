import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const GridStyle = styled(Paper)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: ' repeat(auto-fill, minmax(250px, 1fr))',
  gridGap: '15px',
  padding: '30px 15px',
  borderRadius: '0px',
  minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight})`,
  [theme.breakpoints.down(600)]: {
    minHeight: `calc(100vh - 60px)`,
  },
}));

interface Props {
  children: React.ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
  return <GridStyle>{children}</GridStyle>;
};

export default Grid;
