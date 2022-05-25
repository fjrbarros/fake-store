import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const CardFooterStyle = styled(Box)`
  padding: 25px 0 5px;
  border-top: 1px solid #ddd;
  &:after,
  &:before {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

const CardFooterLeft = styled(Box)`
  float: left;
  & > span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const CardFooterRight = styled(Box)`
  float: right;
`;

const CardFooter: React.FC = () => {
  return (
    <CardFooterStyle>
      <CardFooterLeft>
        <Typography component="span">Rp500.000</Typography>
      </CardFooterLeft>
      <CardFooterRight>
        <button>Teste</button>
      </CardFooterRight>
    </CardFooterStyle>
  );
};

export default CardFooter;
