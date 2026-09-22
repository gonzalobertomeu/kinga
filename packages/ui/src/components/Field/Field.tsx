import { type HTMLAttributes, type ReactNode, useId, useMemo } from 'react';
import { Label } from '../Label';
import styles from './Field.module.css';
import { FieldContext } from './FieldContext';

export type FieldProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> & {
  label: ReactNode;
  /** Helper copy under the control. Hidden while `error` is set. */
  hint?: ReactNode;
  /** Error message; also marks the control `aria-invalid`. */
  error?: ReactNode;
  required?: boolean;
  /** Id for the control. Generated when omitted. */
  id?: string;
};

/**
 * Label + control + hint/error. Wraps one Input, Select or Textarea and wires
 * id, aria-describedby, aria-invalid and required into it automatically.
 */
export function Field({
  label,
  hint,
  error,
  required = false,
  id,
  className,
  children,
  ...props
}: FieldProps) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const messageId = `${controlId}-message`;
  const message = error ?? hint;
  const invalid = error != null && error !== false;

  const context = useMemo(
    () => ({ id: controlId, describedBy: message ? messageId : undefined, invalid, required }),
    [controlId, message, messageId, invalid, required],
  );

  const classes = className ? `${styles.field} ${className}` : styles.field;
  return (
    <div className={classes} {...props}>
      <Label htmlFor={controlId}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </Label>
      <FieldContext.Provider value={context}>{children}</FieldContext.Provider>
      {message && (
        <p
          id={messageId}
          className={invalid ? `${styles.message} ${styles.error}` : styles.message}
        >
          {message}
        </p>
      )}
    </div>
  );
}
