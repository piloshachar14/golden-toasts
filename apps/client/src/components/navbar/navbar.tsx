import { ThemeProvider } from '@emotion/react';
import { createTheme, Fade, MenuItem, Menu } from '@mui/material';

type Props = {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavBar: React.FC<Props> = ({ isDialogOpen, setIsDialogOpen }) => {
  const handleClose = () => {
    setIsDialogOpen(false);
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
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
        <MenuItem onClick={handleClose}>השתיות שלי</MenuItem>
        <MenuItem onClick={handleClose}>עריכת משתמש</MenuItem>
        <MenuItem onClick={handleClose}>התנתק</MenuItem>
      </Menu>
    </ThemeProvider>
  );
};
