import styles from './Meter.module.css';

type Tone = 'default' | 'warning' | 'danger';

/** Internal: the segmented slot shared by Meter and Progress. */
export function SegmentBar({
  segments,
  lit,
  toneAt,
  indeterminate = false,
}: {
  segments: number;
  lit: number;
  toneAt?: (index: number) => Tone;
  indeterminate?: boolean;
}) {
  return (
    <div className={styles.bar} aria-hidden="true">
      {Array.from({ length: segments }, (_, index) => {
        const tone = toneAt?.(index) ?? 'default';
        const classes = [
          styles.segment,
          tone !== 'default' && styles[tone],
          !indeterminate && index < lit && styles.lit,
        ]
          .filter(Boolean)
          .join(' ');
        // biome-ignore lint/suspicious/noArrayIndexKey: segments are positional and never reorder
        return <span key={index} className={classes} />;
      })}
      {indeterminate && <span className={styles.sweep} />}
    </div>
  );
}
