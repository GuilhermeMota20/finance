import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ModalCustomProps } from './types';

export const ModalCustom: React.FC<ModalCustomProps> = ({
  isOpen,
  isForm = false,
  onSubmit,
  onClose,
  ariaDescribedBy,
  ariaLabelledBy,
  title,
  description,
  actions,
  children,
  fullScreen = true
}) => {
  const theme = useTheme();
  const isFullScreen = fullScreen ? useMediaQuery(theme.breakpoints.down('md')) : false;

  const componentActions = (
    <DialogActions>
      {actions || <Button onClick={onClose}>Fechar</Button>}
    </DialogActions>
  );

  const componentChildren = (
    <>
      {children || <DialogContentText id={ariaDescribedBy}>{description}</DialogContentText>}
    </>
  );

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullScreen={isFullScreen}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        scroll='paper'
        PaperProps={isForm ? {
          component: 'form',
          onSubmit: onSubmit,
        } : {}}
      >
        <DialogTitle id={ariaLabelledBy}>
          {title}
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={2} mt={2}>
            {componentChildren}
          </Grid>
        </DialogContent>
        {componentActions}
      </Dialog>
    </>
  );
}
