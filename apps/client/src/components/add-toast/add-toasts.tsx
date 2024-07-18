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
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useState } from 'react';

type Props = {
  isAddToastDialogOpen: boolean;
  setIsAddToastDialogOpe: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddToast: React.FC<Props> = ({
  isAddToastDialogOpen,
  setIsAddToastDialogOpe,
}) => {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const handleOnClose = () => {
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

  const handleClickAway = () => {
    setIsAddToastDialogOpe(false);
  };

  const [solidsPick, setSolidsPick] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof solidsPick>) => {
    const {
      target: { value },
    } = event;
    setSolidsPick(typeof value === 'string' ? value.split(',') : value);
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
        onClose={handleOnClose}
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
              name="description"
              required
            />
            <FormControl sx={{ width: '100%' }}>
              <CacheProvider value={cacheRtl}>
                <InputLabel id="solids-label">בחר את השתייה</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={solidsPick}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                >
                  {fluids.map((fluid) => (
                    <MenuItem key={fluid} value={fluid}>
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
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={solidsPick}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
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
                    sx={{ width: '100%' }}
                    label="בחרו תאריך לשתייה"
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
              onClick={() => handleClickAway()}
            >
              הוספה
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};
