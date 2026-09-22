import { type CSSProperties, type InputHTMLAttributes, useState } from 'react';
import { clamp, snapToStep } from '../../utils/number';
import { useFieldControl } from '../Field/FieldContext';
import styles from './NumberStepper.module.css';

export type NumberStepperProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step'
> & {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  decrementLabel?: string;
  incrementLabel?: string;
};

/** Precise integer/decimal entry with − / + keys. Arrow keys step; typing commits on blur. */
export function NumberStepper({
  value,
  defaultValue,
  onChange,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  decrementLabel = 'Decrease',
  incrementLabel = 'Increase',
  disabled,
  className,
  style,
  onBlur,
  ...props
}: NumberStepperProps) {
  const [internal, setInternal] = useState(() => clamp(defaultValue ?? 0, min, max));
  const [draft, setDraft] = useState<string | null>(null);
  const current = value ?? internal;
  const controlProps = useFieldControl(props);

  const commit = (next: number) => {
    const settled = clamp(snapToStep(next, step, Number.isFinite(min) ? min : 0), min, max);
    if (value === undefined) setInternal(settled);
    if (settled !== current) onChange?.(settled);
  };

  const digits = Math.max(
    3,
    ...[min, max, current].filter(Number.isFinite).map((n) => String(n).length),
  );
  const classes = className ? `${styles.stepper} ${className}` : styles.stepper;

  return (
    <div className={classes} style={{ '--_digits': digits, ...style } as CSSProperties}>
      <button
        type="button"
        className={styles.key}
        aria-label={decrementLabel}
        tabIndex={-1}
        disabled={disabled || current <= min}
        onClick={() => commit(current - step)}
      >
        −
      </button>
      <input
        type="number"
        className={styles.input}
        inputMode="decimal"
        min={Number.isFinite(min) ? min : undefined}
        max={Number.isFinite(max) ? max : undefined}
        step={step}
        disabled={disabled}
        value={draft ?? String(current)}
        onChange={(event) => {
          const raw = event.target.value;
          setDraft(raw);
          const parsed = Number(raw);
          if (raw !== '' && Number.isFinite(parsed) && parsed >= min && parsed <= max) {
            if (value === undefined) setInternal(parsed);
            onChange?.(parsed);
          }
        }}
        onBlur={(event) => {
          if (draft !== null) {
            const parsed = Number(draft);
            commit(draft === '' || !Number.isFinite(parsed) ? current : parsed);
            setDraft(null);
          }
          onBlur?.(event);
        }}
        {...controlProps}
      />
      <button
        type="button"
        className={styles.key}
        aria-label={incrementLabel}
        tabIndex={-1}
        disabled={disabled || current >= max}
        onClick={() => commit(current + step)}
      >
        +
      </button>
    </div>
  );
}
