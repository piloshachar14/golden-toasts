import {
  Dialog,
  Button,
  ThemeProvider,
  Stack,
  TextField,
  DialogTitle,
  createTheme,
  DialogContent,
  FormControl,
  Autocomplete,
  Chip,
} from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useEffect, useState } from 'react';
import {
  useCreateToastMutation,
  Toast,
  useLoginMutation,
  useSignUpMutation,
} from '../../store';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
  isAddToastDialogOpen: boolean;
  setIsAddToastDialogOpe: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddToast: React.FC<Props> = ({
  isAddToastDialogOpen,
  setIsAddToastDialogOpe,
}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [desc, setDesc] = useState<string>('');
  const [, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signupResult',
  });

  const [, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signinResult',
  });
  const userId = signUpData ? signUpData.id : signInData?.id;
  const [solidsPick, setSolidsPick] = useState<string[]>([]);
  const [fluidsPick, setFluidsPick] = useState<string[]>([]);
  const handleGenericChange =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (_: unknown, value: string[] | null) => {
      setter(value || []);
    };
  const [toastData, setToastData] = useState<Toast | null>(null);
  const [
    createToast,
    { isError: isCreateToastError, isSuccess: isCreateToastsuccess },
  ] = useCreateToastMutation();

  useEffect(() => {
    setToastData({
      desc: desc,
      userId: userId ? userId : '',
      hasHappened: false,
      id: '',
      fluids: fluidsPick.join(', '),
      solids: solidsPick.join(', '),
      date: date,
    });
  }, [desc, userId, fluidsPick, solidsPick, date]);
  const handleOnClose = () => {
    if (toastData) {
      createToast(toastData);
      setIsAddToastDialogOpe(false);
    }
  };

  const handleClickAway = () => {
    setIsAddToastDialogOpe(false);
  };

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
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

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

  const solids = [
    'פלאפל',
    'פיצות',
    'גלידה',
    'קרקרים ומטבלים',
    'פירות',
    'עוגיות',
    'עוגות',
  ];

  const fluids = ['אייס קפה', 'שוקו', 'מיץ', 'סודה', 'מים בטעמים', 'קולה'];

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={isAddToastDialogOpen}
        sx={dialogStyle}
        onClose={handleClickAway}
      >
        <DialogTitle
          sx={{
            padding: '2rem',
          }}
          component="h1"
          align="center"
        >
          הוסיפו שתייה לקראת האירוע הבא שלכם!
        </DialogTitle>

        <DialogContent sx={dialogContentStyle}>
          <Stack
            component="form"
            sx={{
              gap: '2rem',
              padding: '1rem',
              width: '80%',
            }}
          >
            <TextField
              placeholder="אנא ציין את סיבת השתייה"
              name="desc"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              required
            />
            <FormControl sx={{ width: '100%' }}>
              <CacheProvider value={cacheRtl}>
                <Autocomplete
                  multiple
                  freeSolo
                  id="demo-multiple-fluids"
                  options={fluids}
                  getOptionLabel={(option) => option}
                  value={fluidsPick}
                  onChange={(_, newValue) =>
                    handleGenericChange(setFluidsPick)(_, newValue)
                  }
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => {
                      const { key, ...tagProps } = getTagProps({ index });
                      return (
                        <Chip
                          variant="outlined"
                          label={option}
                          key={key}
                          {...tagProps}
                        />
                      );
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="בחר את השתייה"
                      placeholder="Favorites"
                      required
                    />
                  )}
                />
              </CacheProvider>
            </FormControl>
            <FormControl sx={{ width: '100%', direction: 'rtl' }}>
              <CacheProvider value={cacheRtl}>
                <Autocomplete
                  freeSolo
                  multiple
                  id="demo-multiple-solids"
                  options={solids}
                  getOptionLabel={(option) => option}
                  value={solidsPick}
                  onChange={(_, newValue) =>
                    handleGenericChange(setSolidsPick)(_, newValue)
                  }
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => {
                      const { key, ...tagProps } = getTagProps({ index });
                      return (
                        <Chip
                          variant="outlined"
                          label={option}
                          key={key}
                          {...tagProps}
                        />
                      );
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="בחר את האוכל"
                      placeholder="Favorites"
                      required
                    />
                  )}
                />
              </CacheProvider>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CacheProvider value={cacheRtl}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    value={dayjs(toastData?.date)}
                    sx={{ width: '100%' }}
                    label="בחרו תאריך לשתייה"
                    onChange={(value: Dayjs | null) => {
                      if (value !== null) {
                        setDate(value.toDate());
                      }
                    }}
                  />
                </DemoContainer>
              </CacheProvider>
            </LocalizationProvider>
          </Stack>

          <Stack gap="4rem" direction="row">
            <Button
              sx={buttonStyles}
              className="cancel"
              variant="contained"
              onClick={() => handleClickAway()}
            >
              ביטול
            </Button>
            <Button
              sx={buttonStyles}
              className="submit"
              type="submit"
              variant="contained"
              onClick={() => handleOnClose()}
            >
              הוספה
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};
