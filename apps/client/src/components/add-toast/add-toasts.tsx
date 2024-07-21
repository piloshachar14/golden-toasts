import {
  Dialog,
  Button,
  ThemeProvider,
  Stack,
  TextField,
  DialogTitle,
  createTheme,
  DialogContent,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  OutlinedInput,
} from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import {
  LocalizationProvider,
  DatePicker,
  PickerChangeHandlerContext,
  DateValidationError,
} from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useState } from 'react';
import { useCreateToastMutation, Toast } from '../../store';
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
  const [solidsPick, setSolidsPick] = useState<string[]>([]);
  const [fluidsPick, setFluidsPick] = useState<string[]>([]);

  const handleSolidsChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setSolidsPick(typeof value === 'string' ? value.split(',') : value);
  };

  const handleFluidsChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setFluidsPick(typeof value === 'string' ? value.split(',') : value);
  };

  const [toastData, setToastData] = useState<Toast>({
    desc: '',
    fluids: '',
    solids: '',
    id: '',
    userId: '384272b4-781f-4896-b0e7-7f951179bdc2',
    date: new Date(),
    hasHappened: false,
  });
  const [
    createToast,
    { isError: isCreateToastError, isSuccess: isCreateToastsuccess },
  ] = useCreateToastMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToastData({
      ...toastData,
      [event.target.name]: event.target.value,
    });
  };
  const handleDateChange = (
    value: Dayjs | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    setToastData({
      ...toastData,
      date: value ? value.toDate() : null,
    });
  };
  const handleOnClose = () => {
    setToastData((prevToastData) => ({
      ...prevToastData,
      solids: solidsPick.join(','),
      fluids: fluidsPick.join(','),
    }));
    createToast(toastData);
    setIsAddToastDialogOpe(false);
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
    color: 'black',
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
              value={toastData.desc}
              onChange={handleInputChange}
              required
            />
            <FormControl sx={{ width: '100%' }}>
              <CacheProvider value={cacheRtl}>
                <InputLabel id="fluids-label">בחר את השתייה</InputLabel>
                <Select
                  multiple
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={fluidsPick}
                  onChange={handleFluidsChange}
                  input={<OutlinedInput label="Name" />}
                  required
                >
                  {fluids.map((fluid, index) => (
                    <MenuItem key={index} value={fluid}>
                      {fluid}
                    </MenuItem>
                  ))}
                </Select>
              </CacheProvider>
            </FormControl>
            <FormControl sx={{ width: '100%', direction: 'rtl' }}>
              <CacheProvider value={cacheRtl}>
                <InputLabel id="solids-label">בחר את האוכל</InputLabel>
                <Select
                  multiple
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={solidsPick}
                  onChange={handleSolidsChange}
                  input={<OutlinedInput label="Name" />}
                  required
                >
                  {solids.map((solid, index) => (
                    <MenuItem key={index} value={solid}>
                      {solid}
                    </MenuItem>
                  ))}
                </Select>
              </CacheProvider>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CacheProvider value={cacheRtl}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    value={dayjs(toastData.date)}
                    sx={{ width: '100%' }}
                    label="בחרו תאריך לשתייה"
                    onChange={handleDateChange}
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
