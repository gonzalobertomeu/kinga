import type { CSSProperties, HTMLAttributes } from 'react';
import type { SpaceStep } from '../../tokens/space';
import styles from './Stack.module.css';

type Alignment = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type Distribution = 'start' | 'center' | 'end' | 'between';

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  direction?: 'vertical' | 'horizontal';
  /** Step on the 4px space scale (`--kinga-space-*`). */
  gap?: SpaceStep;
  /** Cross-axis alignment. */
  align?: Alignment;
  /** Main-axis distribution. */
  justify?: Distribution;
  wrap?: boolean;
};

const flexValue = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
  between: 'space-between',
} as const;

export function Stack({
  direction = 'vertical',
  gap = 3,
  align,
  justify,
  wrap = false,
  className,
  style,
  ...props
}: StackProps) {
  const classes = [styles.stack, styles[direction], wrap && styles.wrap, className]
    .filter(Boolean)
    .join(' ');
  const stackStyle = {
    '--_gap': `var(--kinga-space-${gap})`,
    alignItems: align && flexValue[align],
    justifyContent: justify && flexValue[justify],
    ...style,
  } as CSSProperties;
  return <div className={classes} style={stackStyle} {...props} />;
}
