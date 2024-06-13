import styles from './category.module.css';
import React, { PropsWithChildren, CSSProperties } from 'react';
type Props = {
  style?: CSSProperties;
  title: string;
} & PropsWithChildren;
export type CategoryWidth = string;

export const Category: React.FC<Props> = ({ children, style, title }) => {
  return (
    <div className={styles.category} style={style}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
