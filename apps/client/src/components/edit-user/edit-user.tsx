import {
  Dialog,
  Button,
  ThemeProvider,
  Stack,
  TextField,
  DialogTitle,
  createTheme,
  DialogContent,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  Criminal,
  useCreateCriminalMutation,
  useLoginMutation,
  User,
  useSignUpMutation,
  useUpdateUserMutation,
} from '../../store';

type Props = {
  user?: User;
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

export const EditUser: React.FC<Props> = ({ option, setOption, user }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isCriminal, setIsCriminal] = useState(false);

  const onClose = () => {
    setOption('');
    setCurrentUser({
      id: '',
      fullName: '',
      password: '',
      isAdmin: false,
      armyId: '',
    });
    if (isCriminal) {
      createCriminal({
        isPersonaNonGrata: false,
        user: userData,
        userId: userData.id,
        createdAt: new Date(),
      });
    }
  };
  const [userData, setUserData] = useState<User>({
    id: '',
    fullName: '',
    password: '',
    isAdmin: false,
    armyId: '',
  });
  const [updateUser] = useUpdateUserMutation();
  const [, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signUpResult',
  });

  const [, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signInResult',
  });
  const [createCriminal] = useCreateCriminalMutation();
  useEffect(() => {
    if (option === 'עריכת משתמש') {
      setCurrentUser(signInData || signUpData || null);
    } else if (option === 'אדמין' && user) {
      setCurrentUser(user);
    }
  }, [option, currentUser, setCurrentUser]);
  useEffect(() => {
    if (currentUser) {
      setUserData({
        id: currentUser?.id || '',
        fullName: currentUser?.fullName || '',
        password: currentUser?.password || '',
        isAdmin: currentUser?.isAdmin || false,
        armyId: currentUser?.armyId || '',
      });
    }
  }, [currentUser]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (userData: User) => {
    await updateUser(userData);
    onClose();
    setIsCriminal(false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

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
      <Dialog
        open={option === 'עריכת משתמש' || option == 'אדמין'}
        onClose={onClose}
        sx={dialogStyle}
      >
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
            {signInData?.isAdmin || signUpData?.isAdmin ? (
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={isCriminal}
                    onChange={(e) => setIsCriminal(e.target.checked)}
                  />
                }
                label="הפוך לפושע"
                labelPlacement="end"
              />
            ) : (
              ''
            )}
          </Stack>
          <Stack gap="4rem" direction="row">
            <Button
              sx={buttonStyles}
              className="cancel"
              variant="contained"
              onClick={onClose}
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
