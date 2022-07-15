import classNames from "classnames";
import styles from './RadioButton.module.scss';
import { RadioButtonProps } from "./RadioButton.types";

export const RadioButtonComponent: React.FC<RadioButtonProps> = ({
    label,
    value,
    name,
    disabled,
    className,
    style
}) => {
    const radioClass = classNames(
        styles.radio,
        {
            [styles[`radio_label_${label}`]]: label,
            [styles.disabled]: disabled,
        },
        className
    );
    return (
        <input type="radio" name={name} value={value} className={radioClass} disabled={disabled} style={style} />
    )
}
