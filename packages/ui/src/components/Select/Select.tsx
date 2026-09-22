import type { SelectHTMLAttributes } from 'react';
import { useFieldControl } from '../Field/FieldContext';
import styles from './Select.module.css';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...props }: SelectProps) {
  const controlProps = useFieldControl(props);
  const classes = className ? `${styles.select} ${className}` : styles.select;
  return (
    <select className={classes} {...controlProps}>
      {children}
    </select>
  );
}
