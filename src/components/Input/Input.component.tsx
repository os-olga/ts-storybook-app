import classNames from "classnames";
import { InputProps } from "./Input.types";
import styles from './Input.module.scss';

export const InputComponent: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  disabled,
  className,
  style,
}) => {
  const inputClass = classNames(
    styles.input,
    {
      [styles.disabled]: disabled,
    },
    className
  );

  const styleInput = (value: string) => {
    console.log(value)
  }

  styleInput(value)

  return (
    <div className={inputClass}>
      <input
        type={type}
        className={styles.tag}
        disabled={disabled}
        style={style}
        value={value}
      />
      <label className={styles.label}>{placeholder}</label>
    </div>

  )
}
