import styles from './heading.module.css';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
type Props = {
  isLogin: boolean;
};
export const Heading: React.FC<Props> = (props) => {
  const matteBlack = '#4FFFB0';
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>
        !!נפגשים שוב!! תומר שטיינברג הפרסונה נון גרטה
      </h1>
      {!props.isLogin ? (
        <LoginIcon
          sx={{
            color: 'green',
            backgroungcolor: matteBlack,
            right: 40,
            top: 40,
            fontSize: 70,
            position: 'fixed',
            '&:hover': {
              cursor: 'pointer',
              color: matteBlack,
              transition: 'transform 0.2s ease-in-out',
              transform: 'scale(1.2)',
            },
          }}
        />
      ) : (
        <SettingsIcon
          sx={{
            color: 'red',
            backgroungcolor: matteBlack,
            right: 40,
            top: 40,
            fontSize: 90,
            transition: 'transform 0.5s ease-in-out',
            position: 'fixed',
            '&:hover': {
              transitionDelay: 1,
              cursor: 'pointer',
              color: 'green',
              transition: 'transform 0.5s ease-in-out',
              transform: 'rotate(90deg)',
            },
          }}
        />
      )}
      ;
    </div>
  );
};
