import styles from './app.module.css';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import { Category } from '../components/category/category';
export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}> !!!נפגשים שוב! תומר שטיינברג הפושע</h1>
        <LoginIcon
          sx={{
            color: 'green',
            backgroungcolor: '#28282B',
            right: 20,
            top: 40,
            fontSize: 70,
            position: 'fixed',
            '&:hover': {
              cursor: 'pointer',
              color: '#4FFFB0',
              transition: 'transform 0.2s ease-in-out',
              transform: 'scale(1.2)',
            },
          }}
        />
      </div>
      <div className={styles.categories}>
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};
export default App;

<SettingsIcon
  sx={{
    color: 'red',
    backgroungcolor: '#28282B',
    fontSize: 90,
    position: 'fixed',
    '&:hover': {
      transitionDelay: 1,
      cursor: 'pointer',
      color: 'green',
      transition: 'transform 0.5s ease-in-out',
      transform: 'rotate(90deg)',
    },
  }}
/>;
