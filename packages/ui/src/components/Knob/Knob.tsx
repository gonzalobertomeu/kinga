import {
  type HTMLAttributes,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
} from 'react';
import { clamp, snapToStep } from '../../utils/number';
import { Label } from '../Label';
import styles from './Knob.module.css';

export type KnobProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: ReactNode;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  disabled?: boolean;
  size?: 'sm' | 'md';
};

const SWEEP_DEGREES = 270;
const TICKS = 11;
/** Vertical drag distance (px) that covers the full range. */
const DRAG_RANGE_PX = 200;

function tickLine(index: number) {
  const angle = ((-SWEEP_DEGREES / 2 + (index / (TICKS - 1)) * SWEEP_DEGREES) * Math.PI) / 180;
  const point = (radius: number) => ({
    x: 50 + radius * Math.sin(angle),
    y: 50 - radius * Math.cos(angle),
  });
  const inner = point(43);
  const outer = point(49);
  return { x1: inner.x, y1: inner.y, x2: outer.x, y2: outer.y };
}

/**
 * Rotary control for a bounded value. `role="slider"`: arrows step, PageUp/PageDown
 * step ×10, Home/End jump to the ends; drag vertically with the pointer.
 */
export function Knob({
  value,
  defaultValue,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,
  formatValue = String,
  disabled = false,
  size = 'md',
  className,
  'aria-label': ariaLabel,
  ...props
}: KnobProps) {
  const labelId = useId();
  const [internal, setInternal] = useState(() => clamp(defaultValue ?? min, min, max));
  const current = value ?? internal;
  const drag = useRef<{ startY: number; startValue: number } | null>(null);

  const commit = (next: number) => {
    const settled = clamp(snapToStep(next, step, min), min, max);
    if (settled === current) return;
    if (value === undefined) setInternal(settled);
    onChange?.(settled);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    const moves: Record<string, number> = {
      ArrowUp: current + step,
      ArrowRight: current + step,
      ArrowDown: current - step,
      ArrowLeft: current - step,
      PageUp: current + step * 10,
      PageDown: current - step * 10,
      Home: min,
      End: max,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    commit(next);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { startY: event.clientY, startValue: current };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const delta = ((drag.current.startY - event.clientY) / DRAG_RANGE_PX) * (max - min);
    commit(drag.current.startValue + delta);
  };

  const endDrag = () => {
    drag.current = null;
  };

  const fraction = max > min ? (current - min) / (max - min) : 0;
  const angle = -SWEEP_DEGREES / 2 + fraction * SWEEP_DEGREES;
  const classes = [styles.knob, styles[size], className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {label && (
        <Label as="span" id={labelId}>
          {label}
        </Label>
      )}
      <div
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={current}
        aria-valuetext={formatValue(current)}
        aria-label={ariaLabel}
        aria-labelledby={label ? labelId : undefined}
        aria-disabled={disabled || undefined}
        className={styles.control}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <svg className={styles.ticks} viewBox="0 0 100 100" aria-hidden="true">
          {Array.from({ length: TICKS }, (_, index) => (
            <line
              // biome-ignore lint/suspicious/noArrayIndexKey: ticks are positional and never reorder
              key={index}
              {...tickLine(index)}
              className={
                index / (TICKS - 1) <= fraction + 1e-9
                  ? `${styles.tick} ${styles.tickLit}`
                  : styles.tick
              }
            />
          ))}
        </svg>
        <div className={styles.dial}>
          <div className={styles.pointer} style={{ transform: `rotate(${angle}deg)` }} />
        </div>
      </div>
      {showValue && (
        <span className={styles.value} aria-hidden="true">
          {formatValue(current)}
        </span>
      )}
    </div>
  );
}
