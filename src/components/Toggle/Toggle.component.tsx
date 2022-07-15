import React from 'react';
import classNames from 'classnames';
import styles from './Toggle.module.scss';
import { ToggleProps } from './Toggle.types';

export const ToggleComponent: React.FC<ToggleProps> = ({
    isChecked, className
}) => {
    const toggleClass = classNames(
        styles.toggle,
        {
            [styles[`toggle_isChecked_${isChecked}`]]: isChecked,
        },
        className
    );

    return (
        <label className={toggleClass}>
            <input type="checkbox" checked={isChecked} />
            <span className="control"></span>
        </label>

    );
};

ToggleComponent.displayName = 'Badge';
