import { Button } from '@mui/material';

const Shop: React.FC = () => {
  return (
    <Button
      size="small"
      sx={{
        color: '#fff',
        border: 'none',
        '&:hover': {
          border: 'none',
        },
      }}
    >
      Shop
    </Button>
  );
};

export default Shop;
