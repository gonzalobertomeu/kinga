import type { LabelHTMLAttributes } from 'react';
import styles from './Label.module.css';

export type LabelProps = LabelHTMLAttributes<HTMLElement> & {
  /** `label` for form controls (default), `span` for section captions, `legend` inside a fieldset. */
  as?: 'label' | 'span' | 'legend';
};

export function Label({ as: Tag = 'label', className, ...props }: LabelProps) {
  const classes = className ? `${styles.label} ${className}` : styles.label;
  return <Tag className={classes} {...props} />;
}
