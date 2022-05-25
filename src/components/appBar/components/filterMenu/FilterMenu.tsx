import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProductsByCategory } from '../../../../api';
import { AppDispatch, RootState } from '../../../../store';
import {
  changeFilterCategory,
  resetCategoryError,
} from '../../../../store/shop';
import { ListItemText, MenuList, Snackbar, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import CheckIcon from '@mui/icons-material/Check';

const FilterMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch: AppDispatch = useDispatch();
  const { filterCategory } = useSelector((data: RootState) => data.shop);
  const { data, error, loading } = useSelector(
    (data: RootState) => data.shop.categories,
  );

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, data.length]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickMenuItem = (category: string) => {
    dispatch(changeFilterCategory(category));
    dispatch(fetchProductsByCategory());
  };

  return (
    <>
      <LoadingButton
        size="small"
        onClick={handleClick}
        loading={loading}
        variant="outlined"
        disabled={loading}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          color: '#fff',
          border: 'none',
          '&:hover': {
            border: 'none',
          },
        }}
      >
        <FilterListIcon />
      </LoadingButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          elevation: 0,
          sx: {
            padding: '5px',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            width: '230px',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 25,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {data.length ? (
          <MenuList sx={{ outline: 'none' }}>
            {data.map(category => {
              const itemFilter = filterCategory.find(item => item === category);
              return (
                <MenuItem
                  key={category}
                  onClick={() => handleClickMenuItem(category)}
                  sx={{
                    marginBottom: '10px',
                    // borderRadius: '30px',
                    // border: '1px solid',
                    // borderColor: itemFilter ? 'red' : 'transparent',
                    boxShadow: itemFilter
                      ? '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)'
                      : 'none',
                  }}
                >
                  <ListItemText sx={{ textTransform: 'uppercase' }}>
                    {category}
                  </ListItemText>
                  {itemFilter && <CheckIcon sx={{ marginLeft: '10px' }} />}
                </MenuItem>
              );
            })}
          </MenuList>
        ) : (
          <Typography>No options</Typography>
        )}
      </Menu>
      <Snackbar open={Boolean(error)}>
        <Alert
          variant="outlined"
          severity="error"
          sx={{ width: '100%' }}
          onClose={() => dispatch(resetCategoryError())}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FilterMenu;
