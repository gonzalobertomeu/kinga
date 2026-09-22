import { type ChangeEvent, type InputHTMLAttributes, useState } from 'react';
import { useFieldControl } from '../Field/FieldContext';
import styles from './Slider.module.css';

export type SliderProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step'
> & {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number, event: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Number of tick marks under the rail (0 = none). */
  ticks?: number;
  /** Show the mono readout next to the rail. */
  showValue?: boolean;
  formatValue?: (value: number) => string;
};

/** Fader for a continuous value. Native `<input type="range">`; works inside `Field`. */
export function Slider({
  value,
  defaultValue,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  ticks = 0,
  showValue = true,
  formatValue = String,
  className,
  style,
  ...props
}: SliderProps) {
  const [internal, setInternal] = useState(defaultValue ?? min);
  const current = value ?? internal;
  const controlProps = useFieldControl(props);
  const classes = className ? `${styles.slider} ${className}` : styles.slider;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = Number(event.target.value);
    if (value === undefined) setInternal(next);
    onChange?.(next, event);
  };

  return (
    <div className={classes} style={style}>
      <div className={styles.rail}>
        <input
          type="range"
          className={styles.input}
          min={min}
          max={max}
          step={step}
          value={current}
          aria-valuetext={formatValue(current)}
          onChange={handleChange}
          {...controlProps}
        />
        {ticks > 1 && (
          <div className={styles.ticks} aria-hidden="true">
            {Array.from({ length: ticks }, (_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: ticks are identical and never reorder
              <span key={index} />
            ))}
          </div>
        )}
      </div>
      {showValue && (
        <output className={styles.value} htmlFor={controlProps.id} aria-hidden="true">
          {formatValue(current)}
        </output>
      )}
    </div>
  );
}
