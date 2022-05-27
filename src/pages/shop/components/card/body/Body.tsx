import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
}

const Body: React.FC<Props> = ({ children }) => (
  <Box paddingTop="320px">{children}</Box>
);

export default Body;
