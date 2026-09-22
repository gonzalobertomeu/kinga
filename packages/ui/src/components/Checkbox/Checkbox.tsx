import { type InputHTMLAttributes, useId } from 'react';
import styles from './Checkbox.module.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
};

export function Checkbox({ className, label, id, ...props }: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const wrapperClasses = className ? `${styles.wrapper} ${className}` : styles.wrapper;

  return (
    <label className={wrapperClasses} htmlFor={checkboxId}>
      <input id={checkboxId} type="checkbox" className={styles.checkbox} {...props} />
      {label}
    </label>
  );
}
