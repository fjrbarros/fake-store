import { useDispatch, useSelector } from 'react-redux';
import { modeDark, modeLight } from '../../../../store/themeMode';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { RootState } from '../../../../store';
import { SxProps } from '@mui/material';

interface Props {
  sx?: SxProps;
}

const ThemeButton: React.FC<Props> = ({ sx }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((data: RootState) => data.themeMode);
  const isThemeDark = theme === 'dark';

  const handleClick = () => {
    localStorage.setItem('theme', isThemeDark ? 'ligth' : 'dark');
    dispatch(isThemeDark ? modeLight() : modeDark());
  };

  return (
    <IconButton onClick={handleClick} sx={sx}>
      {isThemeDark ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeButton;
