import { type FieldsetHTMLAttributes, type ReactNode, useId } from 'react';
import { Label } from '../Label';
import styles from './SegmentedControl.module.css';

export type SegmentedControlOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

export type SegmentedControlProps = Omit<
  FieldsetHTMLAttributes<HTMLFieldSetElement>,
  'onChange' | 'defaultValue'
> & {
  options: SegmentedControlOption[];
  /** Caption above the keys. Without it, pass `aria-label`. */
  label?: ReactNode;
  name?: string;
  /** Controlled value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

/** Pick one of a few modes. Radio-group semantics, rendered as a row of latching keys. */
export function SegmentedControl({
  options,
  label,
  name,
  value,
  defaultValue,
  onChange,
  className,
  ...props
}: SegmentedControlProps) {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  const classes = className ? `${styles.group} ${className}` : styles.group;

  return (
    <fieldset className={classes} {...props}>
      {label && (
        <Label as="legend" className={styles.legend}>
          {label}
        </Label>
      )}
      <div className={styles.keys}>
        {options.map((option) => (
          <label key={option.value} className={styles.segment}>
            <input
              type="radio"
              className={styles.input}
              name={groupName}
              value={option.value}
              disabled={option.disabled}
              {...(value === undefined
                ? { defaultChecked: defaultValue === option.value }
                : { checked: value === option.value })}
              onChange={() => onChange?.(option.value)}
            />
            <span className={styles.key}>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
