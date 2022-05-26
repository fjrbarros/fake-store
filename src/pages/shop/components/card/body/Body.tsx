import { experimentalStyled as styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const BodyStyle = styled(Box)`
  padding-top: 104%;
`;

interface Props {
  children: React.ReactNode;
}

const Body: React.FC<Props> = ({ children }) => (
  <BodyStyle>{children}</BodyStyle>
);

export default Body;
