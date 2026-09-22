import type { SelectHTMLAttributes } from 'react';
import styles from './Select.module.css';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...props }: SelectProps) {
  const classes = className ? `${styles.select} ${className}` : styles.select;
  return (
    <select className={classes} {...props}>
      {children}
    </select>
  );
}
