import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const CategoryStyle = styled(Box)`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 45px;
  position: relative;
  transition: all 0.2s ease-in-out;
  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > span {
    font-size: 0.9rem;
    padding: 12px 30px;
    border: 1px solid #313131;
    background: #212121;
    color: #fff;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 27px;
    transition: all 0.05s ease-in-out;
    white-space: nowrap;
    display: inline-block;
  }
`;

interface Props {
  category: string;
}

const Category: React.FC<Props> = ({ category }) => {
  return (
    <CategoryStyle className="category">
      <Typography className="category-text" component="span">
        {category}
      </Typography>
    </CategoryStyle>
  );
};

export default Category;
