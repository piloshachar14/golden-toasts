import styles from './heading.module.css';
import { Login, Settings } from '@mui/icons-material';
import { RecordState } from '..';
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';
import { NavBar, SignIn } from '..';
type Props = {
  isLogin: boolean;
  title: string;
};
export const Heading: React.FC<Props> = ({ title, isLogin }) => {
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
        <div className={styles.headingContainer}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className="statebutton">
            <RecordState />
          </div>
        </div>
        <Tooltip anchorSelect=".statebutton" place="bottom">
          מצב שתיות נוכחי
        </Tooltip>
        {!isLogin ? (
          <Login
            sx={{
              position: 'fixed',
              color: 'var(---light-blue-login-button-color)',
              backgroungcolor: BackgroundColor,
              right: 40,
              top: 40,
              fontSize: 70,
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
          <Settings
            sx={{
              position: 'fixed',
              color: 'var(---grey-settings-button-color)',
              backgroungcolor: BackgroundColor,
              right: 40,
              top: 20,
              fontSize: 90,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transitionDelay: 1,
                cursor: 'pointer',
                color: 'var(---on-hover-grey-setting-button)',
                transform: 'rotate(90deg)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
            onClick={() => handleSettingsButtonClick()}
          />
        )}
      </div>
      <SignIn isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      <NavBar isDialogOpen={isNavBarOpen} setIsDialogOpen={setIsNavBarOpen} />
    </>
  );
};
