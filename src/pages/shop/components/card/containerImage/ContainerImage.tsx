import { styled } from '@mui/material/styles';
import { Img } from '../../../../../components';
import Box from '@mui/material/Box';

const ContainerImageStyle = styled(Box)`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  padding: 15px;
  transition: all 0.2s ease-in-out;
  height: 350px;
`;

interface Props {
  src: string;
  alt: string;
}

const ContainerImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <ContainerImageStyle className="container-image">
      <Img src={src} alt={alt} />
    </ContainerImageStyle>
  );
};

export default ContainerImage;
