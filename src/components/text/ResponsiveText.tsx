import Typography from '@mui/material/Typography';

interface Props {
  up: string;
  down: string;
  text: string;
  component?: React.ElementType;
  color?: string;
  textTransform?: string;
}

const ResponsiveText: React.FC<Props> = ({
  up,
  down,
  text,
  component = 'p',
  color = '#fff',
  textTransform = 'none',
}) => {
  return (
    <Typography
      component={component}
      sx={theme => ({
        fontWeight: '400',
        fontSize: up,
        color: color,
        textTransform: textTransform,
        [theme.breakpoints.down(600)]: {
          fontSize: down,
        },
      })}
    >
      {text}
    </Typography>
  );
};

export default ResponsiveText;
