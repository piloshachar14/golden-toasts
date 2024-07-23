import { ThemeProvider } from '@emotion/react';
import { createTheme, Fade, MenuItem, Menu } from '@mui/material';
import { useSignUpMutation } from '../../store';
import { useState } from 'react';
import { EditUser } from '../edit-user/edit-user';

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavBar: React.FC<Props> = ({ isDialogOpen, setIsDialogOpen }) => {
  const [navBarOption, setNavBarOption] = useState<string>('');
  const [, loginResult] = useSignUpMutation({
    fixedCacheKey: 'signupResult',
  });

  const handleClick = (option: string) => () => {
    setNavBarOption(option);
    setIsDialogOpen(false);
  };
  const handleOnClose = () => {
    setIsDialogOpen(false);
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const navBarOptions = ['התנתק', 'עריכת משתמש', 'השתיות שלי'];
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Menu
          id="basic-menu"
          open={isDialogOpen}
          onClose={handleOnClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          TransitionComponent={Fade}
        >
          {navBarOptions.map((option, index) => (
            <MenuItem onClick={handleClick(option)} key={index}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </ThemeProvider>
      <EditUser option={navBarOption} />
    </>
  );
};
