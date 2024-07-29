import { ThemeProvider } from '@emotion/react';
import { createTheme, Fade, MenuItem, Menu } from '@mui/material';
import { useSignUpMutation } from '../../store';
import { useState } from 'react';
import { DisplayToasts, EditUser } from '..';

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
  const navBarOptions = ['עריכת משתמש', 'השתיות שלי', 'התנתק'];
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Menu
          sx={{
            direction: 'rtl',
          }}
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
      <EditUser option={navBarOption} setOption={setNavBarOption} />
      <DisplayToasts option={navBarOption} setOption={setNavBarOption} />
    </>
  );
};
