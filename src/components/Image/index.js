import classNames from 'classnames';
import { useState } from 'react';
import styles from './Image.module.scss';
import { images } from '~/assets';

function Image({ src, alt, className, fallBack: customFallBack = images.noImage }) {
    const [fallBack, setFallBack] = useState('');

    return (
        <img
            src={fallBack || src}
            alt={alt}
            className={classNames(className, styles.wrapper)}
            onError={() => {
                setFallBack(customFallBack);
            }}
        />
    );
}

export default Image;
