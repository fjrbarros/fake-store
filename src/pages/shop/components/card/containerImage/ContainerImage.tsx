import { experimentalStyled as styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ContainerImageStyle = styled(Box)`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  padding: 15px;
  transition: all 0.2s ease-in-out;
  height: 50%;
`;

interface Props {
  src: string;
  alt: string;
}

const ContainerImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <ContainerImageStyle className="container-image">
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          transition: 'all 0.2s ease-in-out',
          borderRadius: '6px',
          height: '100%',
        }}
      />
    </ContainerImageStyle>
  );
};

export default ContainerImage;
