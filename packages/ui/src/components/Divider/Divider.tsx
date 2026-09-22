import type { HTMLAttributes } from 'react';
import styles from './Divider.module.css';

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  /** `vertical` stretches to the height of a horizontal Stack row. */
  orientation?: 'horizontal' | 'vertical';
};

export function Divider({ orientation = 'horizontal', className, ...props }: DividerProps) {
  const classes = [styles.divider, styles[orientation], className].filter(Boolean).join(' ');
  return <hr className={classes} aria-orientation={orientation} {...props} />;
}
