import { type InputHTMLAttributes, useId } from 'react';
import styles from './Switch.module.css';

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'> & {
  label?: string;
};

/** On/off toggle for settings that apply immediately. Native checkbox with `role="switch"`. */
export function Switch({ className, label, id, ...props }: SwitchProps) {
  const generatedId = useId();
  const switchId = id ?? generatedId;
  const wrapperClasses = className ? `${styles.wrapper} ${className}` : styles.wrapper;

  return (
    <label className={wrapperClasses} htmlFor={switchId}>
      <span className={styles.track}>
        {/* biome-ignore lint/a11y/useAriaPropsForRole: a native checkbox exposes its checked state; aria-checked would only duplicate (and could desync from) it */}
        <input id={switchId} type="checkbox" role="switch" className={styles.input} {...props} />
        <span className={styles.thumb} aria-hidden="true" />
      </span>
      {label}
    </label>
  );
}
