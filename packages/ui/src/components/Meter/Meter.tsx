import { type HTMLAttributes, type ReactNode, useId } from 'react';
import { litSegments } from '../../utils/number';
import { Label } from '../Label';
import styles from './Meter.module.css';
import { SegmentBar } from './SegmentBar';

export type MeterProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  value: number;
  min?: number;
  max?: number;
  /** Number of segments in the bar. */
  segments?: number;
  /** Segments above this value light in `warning`. */
  warning?: number;
  /** Segments above this value light in `danger`. */
  danger?: number;
  label?: ReactNode;
  showValue?: boolean;
  formatValue?: (value: number) => string;
};

/** A level within a known range (input level, storage, battery). Segmented, VU-style. */
export function Meter({
  value,
  min = 0,
  max = 100,
  segments = 20,
  warning,
  danger,
  label,
  showValue = false,
  formatValue = String,
  className,
  ...props
}: MeterProps) {
  const labelId = useId();
  const classes = className ? `${styles.meter} ${className}` : styles.meter;

  const toneAt = (index: number) => {
    const segmentTop = min + ((index + 1) / segments) * (max - min);
    if (danger !== undefined && segmentTop > danger) return 'danger';
    if (warning !== undefined && segmentTop > warning) return 'warning';
    return 'default';
  };

  return (
    // biome-ignore lint/a11y/useSemanticElements: native <meter> cannot hold the label/segment markup; role="meter" on a div is the ARIA pattern for custom meters
    <div
      role="meter"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuetext={formatValue(value)}
      aria-labelledby={label ? labelId : undefined}
      className={classes}
      {...props}
    >
      {(label || showValue) && (
        <div className={styles.header}>
          {label && (
            <Label as="span" id={labelId}>
              {label}
            </Label>
          )}
          {showValue && <span className={styles.value}>{formatValue(value)}</span>}
        </div>
      )}
      <SegmentBar
        segments={segments}
        lit={litSegments(value, min, max, segments)}
        toneAt={toneAt}
      />
    </div>
  );
}
