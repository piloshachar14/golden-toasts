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
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { GetToast, useEditToastMutation } from '../../store';

type Props = {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDialogOpen: boolean;
  toast: GetToast;
};
export const EditToast: React.FC<Props> = ({
  setIsDialogOpen,
  isDialogOpen,
  toast,
}) => {
  const [toastData, setToastData] = useState<GetToast>(toast);
  const [date, setDate] = useState(toast.date || new Date());
  const [desc, setDesc] = useState(toast.desc || '');
  const [solidsPick, setSolidsPick] = useState<string[]>([]);
  const [fluidsPick, setFluidsPick] = useState<string[]>([]);
  const [hasHappened, setHasHappened] = useState<boolean>(toast.hasHappened);
  const handleGenericChange =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (_: unknown, value: string[] | null) => {
      setter(value || []);
    };
  useEffect(() => {
    setToastData({
      ...toast,
      date,
      desc,
      solids: solidsPick.join(', '),
      fluids: fluidsPick.join(', '),
      hasHappened,
    });
  }, [hasHappened, date, desc, solidsPick, fluidsPick, toast]);
  const [EditToast] = useEditToastMutation();
  const handleOnClose = () => {
    if (toastData) {
      EditToast(toastData);
      setIsDialogOpen(false);
    }
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
        open={isDialogOpen}
        sx={dialogStyle}
        onClose={() => setIsDialogOpen(false)}
      >
        <DialogTitle
          sx={{
            padding: '2rem',
          }}
          component="h1"
          align="center"
        >
          שנו את השתייה שלכם לראות עיניכם!
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasHappened}
                  onChange={(e) => setHasHappened(e.target.checked)}
                  color="primary"
                />
              }
              label="השתייה בוצעה?"
              labelPlacement="end"
            />
          </Stack>

          <Stack gap="4rem" direction="row">
            <Button
              sx={buttonStyles}
              className="cancel"
              variant="contained"
              onClick={() => setIsDialogOpen(false)}
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
              שמור
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};
