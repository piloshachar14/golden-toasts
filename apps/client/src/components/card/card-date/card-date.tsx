import styles from './card-date.module.css';

type CardDateProps = {
  date: Date;
};

export const CardDate: React.FC<CardDateProps> = ({ date }) => {
  const charOfNewDate = 10;
  const formattedDate = date.toString().substring(0, charOfNewDate);
  return <div className={styles.date}>{formattedDate}</div>;
};
