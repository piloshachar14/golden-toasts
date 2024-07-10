import styles from './heading.module.css';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import { RecordState } from '..';
import { Tooltip } from 'react-tooltip';
type Props = {
  isLogin: boolean;
  title: string;
};
export const Heading: React.FC<Props> = ({ title, isLogin }) => {
  const BackgroundColor = '#4d4855';
  return (
    <div className={styles.heading}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className="statebutton">
        <RecordState />
      </div>
      <Tooltip anchorSelect=".statebutton" place="bottom">
        מצב שתיות נוכחי
      </Tooltip>
      {!isLogin ? (
        <LoginIcon
          sx={{
            position: 'sticky',
            color: '#80FFFF',
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
        />
      )}
      ;
    </div>
  );
};
