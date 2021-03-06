import { useDebounce } from '../../../utils';
import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface Props {
  afterChangeSearchInput?: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ afterChangeSearchInput }) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value);

  useEffect(() => {
    if (afterChangeSearchInput) {
      afterChangeSearchInput(debouncedValue);
    }
  }, [debouncedValue, afterChangeSearchInput]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={e => setValue(e.target.value)}
        endAdornment={
          <IconButton sx={{ color: '#fff' }} onClick={() => setValue('')}>
            <CloseIcon />
          </IconButton>
        }
      />
    </Search>
  );
};

export default SearchInput;
