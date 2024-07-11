import {
  Dialog,
  ClickAwayListener,
  Button,
  ThemeProvider,
  Stack,
  TextField,
  DialogTitle,
  createTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
  isAddToastDialogOpen: boolean;
  setIsAddToastDialogOpe: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddToast: React.FC<Props> = ({
  isAddToastDialogOpen,
  setIsAddToastDialogOpe,
}) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const dialogStyle = {
    direction: 'rtl',
    width: '100%',
    height: '100%',
    position: 'center',
    alignContent: 'center',
    '& .MuiPaper-root': {
      height: '37.5rem',
      width: '37.5rem',
    },
  };

  const handleClickAway = () => {
    setIsAddToastDialogOpe(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Dialog open={isAddToastDialogOpen} sx={dialogStyle}></Dialog>
      </ClickAwayListener>
      ;
    </ThemeProvider>
  );
};
