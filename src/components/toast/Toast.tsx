import { Alert, Snackbar, AlertColor } from '@mui/material';

interface Props {
  open: boolean;
  severity: AlertColor;
  onClose: () => void;
  text: string | undefined;
}

const Toast: React.FC<Props> = ({ open, severity, onClose, text }) => {
  return (
    <Snackbar open={open}>
      <Alert
        variant="outlined"
        severity={severity}
        sx={{ width: '100%' }}
        onClose={onClose}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
