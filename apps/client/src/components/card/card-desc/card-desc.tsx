import styles from './card-desc.module.css';

type Props = {
  desc: string;
};

export const CardDescription: React.FC<Props> = ({ desc }) => {
  return <div className={styles.desc}>{desc}</div>;
};
