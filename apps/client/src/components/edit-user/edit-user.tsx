import {
  Dialog,
  Button,
  ThemeProvider,
  Stack,
  TextField,
  DialogTitle,
  createTheme,
  DialogContent,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  useLoginMutation,
  User,
  useSignUpMutation,
  useUpdateUserMutation,
} from '../../store';

type Props = {
  option: string;
};

export const EditUser: React.FC<Props> = ({ option }) => {
  const [userData, setUserData] = useState<User>({
    id: '',
    fullName: '',
    password: '',
    isAdmin: false,
    armyId: '',
  });
  const [updateUser] = useUpdateUserMutation();
  const [, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signupResult',
  });

  const [, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signinResult',
  });
  useEffect(() => {
    if (signInData || signUpData) {
      setUserData({
        id: signInData?.id || signUpData?.id || '',
        fullName: signInData?.fullName || signUpData?.fullName || '',
        password: signInData?.password || signUpData?.password || '',
        isAdmin: signInData?.isAdmin || signUpData?.isAdmin || false,
        armyId: signInData?.armyId || signUpData?.armyId || '',
      });
    }
  }, [signInData, signUpData]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (userData: User) => {
    await updateUser(userData);
    handleClickAway();
  };
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  useEffect(() => {
    setDialogOpen(option === 'עריכת משתמש');
  }, [option]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const handleClickAway = () => {
    setDialogOpen(false);
  };
  const dialogContentStyle = {
    direction: 'rtl',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1rem',
    color: 'var(--white-color)',
    '&.MuiDialogContent-root': {
      height: '80%',
    },
  };

  const dialogStyle = {
    gap: '6rem',
    direction: 'rtl',
    width: '100%',
    height: '100%',
    position: 'center',
    alignContent: 'center',
    '& .MuiPaper-root': {
      height: '30rem',
      width: '30rem',
    },
  };
  const buttonStyles = {
    fontSize: '1rem',
    width: '90%',
    color: 'var(---black-matte-color)',
    transitionDuration: '100ms',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.2)',
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog open={dialogOpen} onClose={handleClickAway} sx={dialogStyle}>
        {' '}
        <DialogTitle
          sx={{
            padding: '2rem',
          }}
          component="h1"
          align="center"
        >
          עריכת המשתמש :
        </DialogTitle>
        <DialogContent sx={dialogContentStyle}>
          <Stack
            component="form"
            sx={{
              gap: '3rem',
              padding: '1rem',
              width: '80%',
            }}
          >
            <TextField
              placeholder={
                signInData ? signInData?.fullName : signUpData?.fullName
              }
              value={userData.fullName}
              name="fullName"
              required
              onChange={handleInputChange}
            />
            <TextField
              value={userData.armyId}
              placeholder={signInData ? signInData?.armyId : signUpData?.armyId}
              name="armyId"
              type="armyId"
              required
              onChange={handleInputChange}
            />
            <TextField
              value={userData.password}
              placeholder="סיסמא חדשה רצויה"
              name="password"
              type="password"
              required
              onChange={handleInputChange}
            />
          </Stack>
          <Stack gap="4rem" direction="row">
            <Button
              sx={buttonStyles}
              className="cancel"
              variant="contained"
              onClick={handleClickAway}
            >
              ביטול
            </Button>
            <Button
              sx={buttonStyles}
              className="submit"
              type="submit"
              variant="contained"
              onClick={() => handleSubmit(userData)}
            >
              שינוי
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};
