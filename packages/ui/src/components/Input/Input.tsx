import type { InputHTMLAttributes } from 'react';
import { useFieldControl } from '../Field/FieldContext';
import styles from './Input.module.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  const controlProps = useFieldControl(props);
  const classes = className ? `${styles.input} ${className}` : styles.input;
  return <input className={classes} {...controlProps} />;
}
