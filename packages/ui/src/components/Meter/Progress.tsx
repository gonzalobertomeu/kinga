import { type HTMLAttributes, type ReactNode, useId } from 'react';
import { litSegments } from '../../utils/number';
import { Label } from '../Label';
import styles from './Meter.module.css';
import { SegmentBar } from './SegmentBar';

export type ProgressProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Omit for an indeterminate (unknown duration) progress. */
  value?: number;
  max?: number;
  segments?: number;
  label?: ReactNode;
  showValue?: boolean;
  formatValue?: (value: number, max: number) => string;
};

const percent = (value: number, max: number) => `${Math.round((value / max) * 100)}%`;

/** Completion of a task. Segmented; stepping sweep when indeterminate. */
export function Progress({
  value,
  max = 100,
  segments = 20,
  label,
  showValue = false,
  formatValue = percent,
  className,
  ...props
}: ProgressProps) {
  const labelId = useId();
  const indeterminate = value === undefined;
  const classes = className ? `${styles.meter} ${className}` : styles.meter;

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={indeterminate ? undefined : 0}
      aria-valuemax={indeterminate ? undefined : max}
      aria-labelledby={label ? labelId : undefined}
      className={classes}
      {...props}
    >
      {(label || (showValue && !indeterminate)) && (
        <div className={styles.header}>
          {label && (
            <Label as="span" id={labelId}>
              {label}
            </Label>
          )}
          {showValue && !indeterminate && (
            <span className={styles.value}>{formatValue(value, max)}</span>
          )}
        </div>
      )}
      <SegmentBar
        segments={segments}
        lit={indeterminate ? 0 : litSegments(value, 0, max, segments)}
        indeterminate={indeterminate}
      />
    </div>
  );
}
