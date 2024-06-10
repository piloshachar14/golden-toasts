import styles from './heading.module.css';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
type Props = {
  isLogin: boolean;
  title: string;
  desc: string;
};
export const Heading: React.FC<Props> = (props) => {
  const BackgroundColor = '#4d4855';
  return (
    <div className={styles.heading}>
      <div className={styles.title}>
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
      </div>
      {!props.isLogin ? (
        <LoginIcon
          sx={{
            color: '#80FFFF',
            backgroungcolor: BackgroundColor,
            right: 40,
            top: 40,
            fontSize: 70,
            position: 'fixed',
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
            color: '#80FFFF',
            backgroungcolor: BackgroundColor,
            right: 40,
            top: 40,
            fontSize: 90,
            transition: 'transform 0.3s ease-in-out',
            position: 'fixed',
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
