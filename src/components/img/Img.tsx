interface Props {
  src: string;
  alt: string;
}

const Img: React.FC<Props> = ({ src, alt }) => {
  return (
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
  );
};

export default Img;
