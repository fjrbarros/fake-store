import TextField from '@mui/material/TextField';

interface Props {
  name?: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuantityInput: React.FC<Props> = ({ name, value, onChange }) => {
  return (
    <TextField
      sx={{
        width: '55px',
        '& > div > input': { padding: '5px' },
      }}
      type="number"
      InputProps={{ inputProps: { min: 0, max: 100 } }}
      className="quantity"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default QuantityInput;
