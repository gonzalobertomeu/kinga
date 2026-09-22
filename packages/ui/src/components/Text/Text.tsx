import type { HTMLAttributes } from 'react';
import styles from './Text.module.css';

export type TextSize = 'sm' | 'md' | 'lg';
export type TextTone = 'default' | 'muted';

export type TextProps = HTMLAttributes<HTMLElement> & {
  /** Rendered element. Defaults to `p`. */
  as?: 'p' | 'span' | 'div';
  size?: TextSize;
  /** `muted` for secondary copy. */
  tone?: TextTone;
};

export function Text({
  as: Tag = 'p',
  size = 'md',
  tone = 'default',
  className,
  ...props
}: TextProps) {
  const classes = [styles.text, styles[size], styles[tone], className].filter(Boolean).join(' ');
  return <Tag className={classes} {...props} />;
}
