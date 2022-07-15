import React from 'react';
import classNames from 'classnames';
import { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.scss';
import { Typography, TypographyTypeEnum } from 'components/Typography';

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  name,
  id,
  className,
  checked,
  onClick,
  isDisabled,
  style
}) => {
  const checkboxClass = classNames(
    styles.checkbox,
    {
      [styles[`checkbox_checked_${checked}`]]: checked,
      [styles.isDisabled]: isDisabled,
    },
    className
  );

  return (
    <label>
      <input type="checkbox" className="default__check" />
      <span className="custom__check"></span>
    Checkbox
    </label>
  );
};
