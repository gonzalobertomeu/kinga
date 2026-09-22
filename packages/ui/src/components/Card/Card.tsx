import type { HTMLAttributes } from 'react';
import styles from './Card.module.css';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  const classes = className ? `${styles.card} ${className}` : styles.card;
  return <div className={classes} {...props} />;
}
