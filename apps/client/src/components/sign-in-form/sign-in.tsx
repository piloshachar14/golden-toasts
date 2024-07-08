import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import TextField from '@mui/material/TextField';
import { User } from '../../store';
import Stack from '@mui/material/Stack';
import { ThemeProvider, Button, createTheme } from '@mui/material';
import { useState } from 'react';

type Props = {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SignIn: React.FC<Props> = ({ dialogOpen, setDialogOpen }) => {
  const handleClickAway = () => {
    setDialogOpen(false);
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const [loginPage, setLoginPage] = useState(false);
  const handleLoginPageClick = () => {
    setLoginPage(true);
  };
  const handleSignUpPageClick = () => {
    setLoginPage(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      {!loginPage ? (
        <Dialog
          open={dialogOpen}
          sx={{
            direction: 'rtl',
            width: '100%',
            height: '100%',
            position: 'center',
            alignContent: 'center',
            '& .MuiPaper-root': {
              height: '600px',
              width: '600px',
            },
          }}
        >
          <DialogTitle
            sx={{
              paddingTop: '30px',
            }}
            component="h1"
            align="center"
          >
            ברוכים הבאים!
          </DialogTitle>
          <ClickAwayListener onClickAway={handleClickAway}>
            <DialogContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1em',
                color: 'var(--white-color)',
                '&.MuiDialogContent-root': {
                  height: '80%',
                },
              }}
            >
              <Stack
                component="form"
                sx={{
                  gap: '2em',
                }}
              >
                כדי שנוכל להמשיך אצטרך מכם כמה פרטים על עצמכם
                <TextField placeholder="מספר אישי"></TextField>
                <TextField placeholder="שם מלא"></TextField>
                <TextField placeholder="סיסמא רצויה"></TextField>
                <TextField placeholder="סיסמא רצויה"></TextField>
              </Stack>
              <Stack gap="2em" direction="row">
                <Button
                  sx={{
                    width: '40%',
                    color: 'var(---white-color)',
                    transitionDuration: '100ms',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'scale(1.2)',
                    },
                  }}
                  className="cancel"
                  onClick={() => handleClickAway()}
                  variant="contained"
                >
                  ביטול
                </Button>
                <Button
                  sx={{
                    width: '40%',
                    color: 'var(---white-color)',
                    transitionDuration: '100ms',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'scale(1.2)',
                    },
                  }}
                  className="submit"
                  type="submit"
                  variant="contained"
                >
                  הרשמה
                </Button>
              </Stack>
              <Stack>
                <Button
                  sx={{
                    color: 'var(---white-color)',
                    transitionDuration: '100ms',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'scale(1.2)',
                    },
                  }}
                  onClick={() => handleLoginPageClick()}
                >
                  רשומים כבר? לחצו כאן
                </Button>
              </Stack>
            </DialogContent>
          </ClickAwayListener>
        </Dialog>
      ) : (
        <Dialog
          open={dialogOpen}
          sx={{
            direction: 'rtl',
            width: '100%',
            height: '100%',
            position: 'center',
            alignContent: 'center',
            '& .MuiPaper-root': {
              height: '600px',
              width: '600px',
            },
          }}
        >
          <DialogTitle
            sx={{
              paddingTop: '30px',
            }}
            component="h1"
            align="center"
          >
            !ברוכים השבים
          </DialogTitle>
          <ClickAwayListener onClickAway={handleClickAway}>
            <DialogContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '4em',
                color: 'var(--white-color)',
                '&.MuiDialogContent-root': {
                  height: '80%',
                },
              }}
            >
              <Stack
                component="form"
                sx={{
                  gap: '3em',
                }}
              >
                הכניסו את הפרטים שלכם על מנת להתחבר למערכת
                <TextField placeholder="מספר אישי"></TextField>
                <TextField placeholder="סיסמא"></TextField>
              </Stack>
              <Stack gap="2em" direction="row">
                <Button
                  sx={{
                    width: '40%',
                    color: 'var(---white-color)',
                    transitionDuration: '100ms',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'scale(1.2)',
                    },
                  }}
                  className="cancel"
                  onClick={() => handleClickAway()}
                  variant="contained"
                >
                  ביטול
                </Button>
                <Button
                  sx={{
                    width: '40%',
                    color: 'var(---white-color)',
                    transitionDuration: '100ms',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'scale(1.2)',
                    },
                  }}
                  className="submit"
                  type="submit"
                  variant="contained"
                >
                  כניסה
                </Button>
              </Stack>
              <Stack>
                <Button
                  sx={{
                    color: 'var(---white-color)',
                    transitionDuration: '100ms',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'scale(1.2)',
                    },
                  }}
                  onClick={() => handleSignUpPageClick()}
                >
                  הגעתם לכאן בטעות? לחצו כאן על מנת לחזור להרשמה
                </Button>
              </Stack>
            </DialogContent>
          </ClickAwayListener>
        </Dialog>
      )}
    </ThemeProvider>
  );
};
