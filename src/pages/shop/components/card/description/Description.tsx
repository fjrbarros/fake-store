import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

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
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <DescriptionStyle>
      <Typography>{description}</Typography>
    </DescriptionStyle>
  );
};

export default Description;
