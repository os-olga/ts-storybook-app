import classNames from "classnames";
import { TypographyProps } from "./Typography.types";
import styles from './Typography.module.scss';

export const TypographyComponent: React.FC<TypographyProps> = ({
  text, variant, className, style
}) => {
  const textClass = classNames(
    styles.typography,
    {
      [styles[`typography_variant_${variant}`]]: variant,
    },
    className
  );
  return (
    <p className={textClass} style={style} >{text}</p>
  )
}