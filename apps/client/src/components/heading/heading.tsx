import styles from './heading.module.css';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import { SignIn } from '../sign-in-form';

import { NavBar } from '../navbar/navbar';

type Props = {
  isLogin: boolean;
  title: string;
  desc: string;
};
export const Heading: React.FC<Props> = ({ title, desc, isLogin }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const BackgroundColor = '#4d4855';
  const handleOnButtonClick = () => {
    setIsDialogOpen(true);
  };
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const handleSettingsButtonClick = () => {
    setIsNavBarOpen(true);
  };
  return (
    <>
      <div className={styles.heading}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <h2>{desc}</h2>
        </div>
        {!isLogin ? (
          <LoginIcon
            sx={{
              position: 'sticky',
              color: '#80FFFF',
              backgroungcolor: BackgroundColor,
              right: 40,
              top: 40,
              fontSize: 90,
              '&:hover': {
                cursor: 'pointer',
                color: '#40FFFF',
                transition: 'transform 0.3s ease-in-out',
                transform: 'scale(1.2)',
              },
            }}
            onClick={() => handleOnButtonClick()}
          />
        ) : (
          <SettingsIcon
            sx={{
              position: 'sticky',
              color: '#80FFFF',
              backgroungcolor: BackgroundColor,
              right: 40,
              top: 20,
              fontSize: 90,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transitionDelay: 1,
                cursor: 'pointer',
                color: '#008080',
                transition: 'transform 0.3s ease-in-out',
                transform: 'rotate(90deg)',
              },
            }}
            onClick={() => handleSettingsButtonClick()}
          />
        )}
        ;
      </div>
      <SignIn isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <NavBar isDialogOpen={isNavBarOpen} setIsDialogOpen={setIsNavBarOpen} />
    </>
  );
};
