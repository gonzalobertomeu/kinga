import type { TextareaHTMLAttributes } from 'react';
import { useFieldControl } from '../Field/FieldContext';
import styles from './Textarea.module.css';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  const controlProps = useFieldControl(props);
  const classes = className ? `${styles.textarea} ${className}` : styles.textarea;
  return <textarea className={classes} {...controlProps} />;
}
