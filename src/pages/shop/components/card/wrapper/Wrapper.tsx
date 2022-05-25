import { experimentalStyled as styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const WrapperStyle = styled(Box)`
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  margin: 20px auto;
  &:hover .container-image {
    top: -40px;
  }

  &:hover .container-image img {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }

  &:hover .category-text {
    border-color: #ddd;
    box-shadow: none;
    padding: 11px 28px;
  }

  &:hover .category {
    margin-top: 0px;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => (
  <WrapperStyle>{children}</WrapperStyle>
);

export default Wrapper;
