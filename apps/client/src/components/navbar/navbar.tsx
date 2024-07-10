import { ThemeProvider } from '@emotion/react';
import { createTheme, Fade, MenuItem, Menu } from '@mui/material';
import { useCreateUserMutation } from '../../store';

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavBar: React.FC<Props> = ({ isDialogOpen, setIsDialogOpen }) => {
  const [_, loginResult] = useCreateUserMutation({
    fixedCacheKey: 'signupResult',
  });

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const navBarOptions = ['השתיות שלי', 'עריכת משתמש', 'התנתק'];

  return (
    <ThemeProvider theme={darkTheme}>
      <Menu
        id="basic-menu"
        open={isDialogOpen}
        onClose={handleClose}
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
          <MenuItem key={index} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </ThemeProvider>
  );
};
