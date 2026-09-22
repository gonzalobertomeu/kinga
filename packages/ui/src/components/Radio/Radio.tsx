import { type InputHTMLAttributes, useContext, useId } from 'react';
import styles from './Radio.module.css';
import { RadioGroupContext } from './RadioGroupContext';

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
};

export function Radio({ className, label, id, name, ...props }: RadioProps) {
  const group = useContext(RadioGroupContext);
  const generatedId = useId();
  const radioId = id ?? generatedId;
  const wrapperClasses = className ? `${styles.wrapper} ${className}` : styles.wrapper;

  return (
    <label className={wrapperClasses} htmlFor={radioId}>
      <input
        id={radioId}
        type="radio"
        name={name ?? group?.name}
        className={styles.radio}
        {...props}
      />
      {label}
    </label>
  );
}
