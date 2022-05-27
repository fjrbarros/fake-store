import { styled } from '@mui/material/styles';
import { SxProps } from '@mui/material';
import Paper from '@mui/material/Paper';

const GridStyle = styled(Paper)(() => ({
  display: 'grid',
  gridTemplateColumns: ' repeat(auto-fill, minmax(250px, 1fr))',
  gridGap: '15px',
  boxShadow: 'none',
}));

interface Props {
  children: React.ReactNode;
  sx?: SxProps;
}

const Grid: React.FC<Props> = ({ children, sx }) => {
  return <GridStyle sx={sx}>{children}</GridStyle>;
};

export default Grid;
