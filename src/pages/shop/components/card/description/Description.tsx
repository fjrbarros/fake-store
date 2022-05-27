import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HighLight } from '../../../../../components';

const DescriptionStyle = styled(Box)`
  text-align: center;
  width: 100%;
  height: 62px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 15px;
  & > p {
    margin: 0;
    line-height: 1.25;
  }
`;

interface Props {
  description: string;
  toHighLight?: string;
}

const Description: React.FC<Props> = ({ description, toHighLight }) => {
  return (
    <DescriptionStyle>
      <Typography>
        <HighLight toHighLight={toHighLight}>{description}</HighLight>
      </Typography>
    </DescriptionStyle>
  );
};

export default Description;
