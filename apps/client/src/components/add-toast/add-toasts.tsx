import {
  Dialog,
  ClickAwayListener,
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

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

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
    '',
    'גלידה',
    'קרקרים ומטבלים',
    'פירות',
    'עוגיות',
    'עוגות',
  ];

  const fluids = ['אייס קפה', 'שוקו', '', 'מיץ', 'סודה', 'מים בטעמים', 'קולה'];

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
            <FormControl sx={{ width: '100%', direction: 'rtl' }}>
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
            </FormControl>
            <FormControl sx={{ width: '100%', direction: 'rtl' }}>
              <InputLabel id="solids-label">בחר את האוכל</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={solidsPick}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
              >
                {solids.map((solid) => (
                  <MenuItem key={solid} value={solid}>
                    {solid}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  sx={{ direction: 'rtl', width: '100%' }}
                  label="בחרו תאריך לשתייה"
                />
              </DemoContainer>
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
