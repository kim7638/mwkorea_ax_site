import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import { ContentsWrap } from 'components';

import companyData from 'datas/company';

import * as styles from './Footer.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('wrap')}>
      <ContentsWrap tagName="div" className={cx('inner')}>
        <div className={cx('nav')}>
          <ul className={cx('nav__list')}>
            <li className={cx('nav__item')}>
              <Link to="/about" className={cx('nav__link')}>
                About
              </Link>
            </li>
            <li className={cx('nav__item')}>
              <Link to="/portfolio/list" className={cx('nav__link')}>
                Works
              </Link>
            </li>
            <li className={cx('nav__item')}>
              <Link to="/contact" className={cx('nav__link')}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <address className={cx('copyright')}>{companyData.copyright}</address>
      </ContentsWrap>
    </footer>
  );
};

export default Footer;
