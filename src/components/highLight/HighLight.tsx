import { lower } from '../../utils';

interface Props {
  children: string;
  toHighLight?: string;
}

const HighLight: React.FC<Props> = ({ children, toHighLight }) => {
  const regex = new RegExp(`(${toHighLight})`, 'i');

  return (
    <>
      {children.split(regex).map((chunck, index) => {
        return lower(chunck) === lower(toHighLight) ? (
          <mark key={index}>{chunck}</mark>
        ) : (
          chunck
        );
      })}
    </>
  );
};

export default HighLight;
