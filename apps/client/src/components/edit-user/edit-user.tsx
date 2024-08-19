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
  useSetCriminalMutation,
  useLoginMutation,
  User,
  useSignUpMutation,
  useUpdateUserMutation,
  useGetCriminalByIdQuery,
} from '../../store';
import { toast } from 'react-toastify';

type Props = {
  user?: User;
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

export const EditUser: React.FC<Props> = ({ option, setOption, user }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isCriminal, setIsCriminal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { data: userCriminal } = useGetCriminalByIdQuery(user?.id || '');

  const onClose = () => {
    setOption('');
    setCurrentUser({
      id: '',
      fullName: '',
      password: '',
      isAdmin: false,
      armyId: '',
    });
    setIsAdmin(false);
    setIsCriminal(false);
  };
  const [userData, setUserData] = useState<User>({
    id: '',
    fullName: '',
    password: '',
    isAdmin: false,
    armyId: '',
  });
  const [updateUser, { isSuccess: isUpdateUser, isError: isUpdateUserError }] =
    useUpdateUserMutation();
  const [, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signUpResult',
  });

  const [, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signInResult',
  });
  const [SetCriminal, { isSuccess: criminal, isError: isCriminalError }] =
    useSetCriminalMutation();
  useEffect(() => {
    if (option === 'עריכת משתמש') {
      setCurrentUser(signInData || signUpData || null);
    } else if (option === 'מנהל' && user) {
      setCurrentUser(user);
    }
  }, [option, currentUser, setCurrentUser, signInData, signUpData, user]);
  useEffect(() => {
    if (isUpdateUser) {
      toast.success('משתמש עודכן');
    } else if (isUpdateUserError) {
      toast.error('לא ניתן לעשות את הפעולה');
    }
    if (criminal) {
      toast.success('פושע עודכן');
    } else if (isCriminalError) {
      toast.error('לא ניתן לבצע את הפעולה');
    }
  }, [isUpdateUser, isUpdateUserError, criminal, isCriminalError]);
  useEffect(() => {
    if (currentUser) {
      setUserData({
        id: currentUser?.id || '',
        fullName: currentUser?.fullName || '',
        password: currentUser?.password || '',
        isAdmin: currentUser?.isAdmin || false,
        armyId: currentUser?.armyId || '',
      });
      setIsCriminal(!!userCriminal);
      setIsAdmin(currentUser.isAdmin);
    }
  }, [currentUser, setUserData, userData, userCriminal]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (userData: User) => {
    await updateUser({
      ...userData,
      isAdmin,
    });

    if (isCriminal && !userCriminal) {
      await SetCriminal({
        isPersonaNonGrata: false,
        userId: userData.id,
        createdAt: new Date(),
      });
    }

    onClose();
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
      height: '35rem',
      width: '35rem',
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
        open={option === 'עריכת משתמש' || option === 'מנהל'}
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
              placeholder={signInData?.fullName || signUpData?.fullName}
              value={userData.fullName}
              name="fullName"
              required
              onChange={handleInputChange}
            />
            <TextField
              value={userData.armyId}
              placeholder={signInData?.armyId || signUpData?.armyId}
              name="armyId"
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
          {(signInData?.isAdmin || signUpData?.isAdmin) && (
            <Stack direction="row" gap="4rem">
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={!!userCriminal}
                    color="primary"
                    checked={isCriminal}
                    onChange={(e) => setIsCriminal(e.target.checked)}
                  />
                }
                label="הפוך לפושע"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                  />
                }
                label="הפוך למנהל"
                labelPlacement="end"
              />
            </Stack>
          )}
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
              שמור
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};
