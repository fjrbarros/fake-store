import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';

const TitleProductStyle = styled(Box)`
  text-align: center;
  & > h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 15px auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

interface Props {
  title: string;
}

const TitleProduct: React.FC<Props> = ({ title }) => {
  return (
    <TitleProductStyle>
      <Typography component="h3">{title}</Typography>
    </TitleProductStyle>
  );
};

export default TitleProduct;
