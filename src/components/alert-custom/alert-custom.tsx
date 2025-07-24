import { Info } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { AlertTitle, Tooltip } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import type { AlertCustomProps } from './types';
import { SxAlertCustom, SxAlertCustomButton } from './styles';

export const AlertCustom: React.FC<AlertCustomProps> = ({
  title,
  children,
}) => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Tooltip title={title} >
        <IconButton
          disabled={open}
          onClick={() => setOpen(true)}
          sx={SxAlertCustomButton}
        >
          <Info />
        </IconButton>
      </Tooltip>

      <Box sx={SxAlertCustom}>
        <Collapse in={open}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setOpen(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>{title}</AlertTitle>
            {children}
          </Alert>
        </Collapse>
      </Box>
    </>
  );
}
