import {
  Dialog,
  DialogTitle,
  createTheme,
  DialogContent,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import {
  useLoginMutation,
  useSignUpMutation,
  useGetAllToastsByUserQuery,
} from '../../store';
import { ToastsCard } from '../toasts-card';

type Props = {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

export const DisplayToasts: React.FC<Props> = ({ option, setOption }) => {
  const [, { data: signUpData }] = useSignUpMutation({
    fixedCacheKey: 'signupResult',
  });

  const [, { data: signInData }] = useLoginMutation({
    fixedCacheKey: 'signinResult',
  });
  const id = signUpData?.id || signInData?.id;
  const { data: allToasts } = useGetAllToastsByUserQuery(id ? id : '');
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const dialogStyle = {
    width: '100%',
    height: '100%',
    position: 'center',
    alignContent: 'center',
    '& .MuiPaper-root': {
      height: '35rem',
      width: '35rem',
    },
  };
  const dialogContentStyle = {
    direction: 'ltr',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '1rem',
    padding: '0.5rem',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0.5rem',
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'green',
      borderRadius: '0.3rem',
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={option === 'השתיות שלי'}
        onClose={() => setOption('')}
        sx={dialogStyle}
      >
        <DialogTitle sx={{ padding: '2rem' }} component="h1" align="center">
          :השתיות שלך
        </DialogTitle>
        {allToasts ? (
          <DialogContent sx={dialogContentStyle}>
            {allToasts.map((toastItem, index) => (
              <ToastsCard
                title={toastItem.desc}
                date={toastItem.date || new Date()}
                key={index}
                stringBorder="0.1em var( ---green-border-color) solid"
                solids={toastItem.solids}
                fluids={toastItem.fluids}
                isEditable={true}
              />
            ))}
          </DialogContent>
        ) : (
          <div>No toasts found.</div>
        )}
      </Dialog>
    </ThemeProvider>
  );
};
