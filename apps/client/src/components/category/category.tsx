
import styles from './category.module.css';
import React, { CSSProperties } from 'react';
type Props = {
  style?: CSSProperties;
  title: string;
};
export type CategoryWidth = string;

export const Category: React.FC<Props> = (props) => {
  return (
    <div className={styles.category} style={props.style}>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );

};
