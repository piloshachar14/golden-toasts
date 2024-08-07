import {
  Dialog,
  DialogTitle,
  createTheme,
  DialogContent,
  ThemeProvider,
} from '@mui/material';
import { useGetAllUsersQuery, User } from '../../store';

import { useState } from 'react';
import { EditUser, UserCard } from '..';

type Props = {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};
export const EditUsers: React.FC<Props> = ({ option, setOption }) => {
  const { data: allUsers } = useGetAllUsersQuery();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
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
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setOption('עריכת משתמש');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={option === 'עריכת משתמשים'}
        onClose={() => setOption('')}
        sx={dialogStyle}
      >
        <DialogTitle sx={{ padding: '2rem' }} component="h1" align="center">
          כל המשתמשים
        </DialogTitle>
        {allUsers ? (
          <DialogContent sx={dialogContentStyle}>
            {allUsers.map((user, index) => (
              <UserCard
                key={index}
                user={user}
                stringBorder="0.1em var( ---green-border-color) solid"
                onClick={() => handleUserClick(user)}
              />
            ))}
          </DialogContent>
        ) : (
          <div>No users found.</div>
        )}
      </Dialog>
      {selectedUser && (
        <EditUser option={option} user={selectedUser} setOption={setOption} />
      )}
    </ThemeProvider>
  );
};
