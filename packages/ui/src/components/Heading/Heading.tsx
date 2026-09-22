import type { HTMLAttributes } from 'react';
import styles from './Heading.module.css';

export type HeadingLevel = 1 | 2 | 3;

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /** Visual size. Also picks the element (`h1`–`h3`) unless `as` is given. */
  level?: HeadingLevel;
  /** Override the element to keep document outline correct independent of size. */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading({ level = 2, as, className, ...props }: HeadingProps) {
  const Tag = as ?? (`h${level}` as const);
  const classes = [styles.heading, styles[`level${level}`], className].filter(Boolean).join(' ');
  return <Tag className={classes} {...props} />;
}
