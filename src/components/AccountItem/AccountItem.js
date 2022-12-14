import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '../Image';
import { images } from '~/assets';
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/alt-text */

const cx = classNames.bind(styles);
function AccountItem({ data, onClick }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
            <Image alt={data.nickname} fallBack={images.noImage} src={data.avatar} className={cx('avatar')} />

            <div className={cx('body')}>
                <h4 className={cx('title')}>
                    <span>{data.nickname}</span>
                    {!!data.tick && <FaCheckCircle className={cx('check')} />}
                </h4>
                <p className={cx('description')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
