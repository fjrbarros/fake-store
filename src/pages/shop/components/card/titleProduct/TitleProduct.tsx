import { HighLight } from '../../../../../components';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
  toHighLight?: string;
}

const TitleProduct: React.FC<Props> = ({ title, toHighLight }) => {
  return (
    <TitleProductStyle>
      <Typography component="h3">
        <HighLight toHighLight={toHighLight}>{title}</HighLight>
      </Typography>
    </TitleProductStyle>
  );
};

export default TitleProduct;
