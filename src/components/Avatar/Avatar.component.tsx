import React from 'react';
import classNames from 'classnames';
import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';
import { TypographyTypeEnum, Typography } from 'components/Typography';

const obj = {
    sm: TypographyTypeEnum.body_m,
    md: TypographyTypeEnum.body_l,
    lg: TypographyTypeEnum.h3
}

export const AvatarComponent: React.FC<AvatarProps> = ({
    firstname,
    lastname,
    // image = "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    image,
    size,
    className,
}) => {
    const avatarClass = classNames(
        styles.avatar,
        {
            [styles[`avatar_size_${size}`]]: size,
        },
        className
    );

    return (
        <div className={avatarClass}>
            {image ?
                <div
                    className={styles.image}
                    style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'contain' } : {}}>
                </div>
                :
                <div className={styles.image}>
                    <Typography
                        text={firstname[0] + lastname[0]}
                        variant={TypographyTypeEnum.body_m}
                    />
                </div>
            }
        </div>
    );
};

AvatarComponent.displayName = 'Avatar';
