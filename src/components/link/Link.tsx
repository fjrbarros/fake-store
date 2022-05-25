import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

const LinkRouter = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:focus, &:hover, &:visited, &:link, &:active': {
    textDecoration: 'none',
  },
}));

interface Props {
  children: React.ReactNode;
  path: string;
}

const LinkTeste: React.FC<Props> = ({ children, path }) => {
  return <LinkRouter to={path}>{children}</LinkRouter>;
};

export default LinkTeste;
