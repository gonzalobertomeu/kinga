import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  const classes = className ? `${styles.input} ${className}` : styles.input;
  return <input className={classes} {...props} />;
}
