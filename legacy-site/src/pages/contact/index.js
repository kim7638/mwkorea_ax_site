import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import { ContentsWrap, Footer } from 'components';

import companyData from 'datas/company';

import * as styles from './Contact.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <ContentsWrap className={cx('wrap')}>
          <h2 className="for-a11y">Contact</h2>
          <p className={cx('top-text')}>
            프로젝트에 대한
            <br />
            문의나 의뢰가 <span className="inline-block">있으신가요?</span>
          </p>
          <address className={cx('address')}>
            {companyData.address.split('\n').map((line, i) => {
              return (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              );
            })}
          </address>
          <div className={cx('contact')}>
            <ul className={cx('contact__list')}>
              <li className={cx('contact__item')}>T. {companyData.tel}</li>
              <li className={cx('contact__item')}>F. {companyData.fax}</li>
              <li className={cx('contact__item')}>E. {companyData.email}</li>
            </ul>
          </div>
          <div className={cx('bottom')}>
            <a href={`mailto:${companyData.email}`} className={cx('inquire')}>
              문의하기
            </a>
            <a href="/static-contents/download/mwkorea_Company_Portfolio.pdf" className={cx('download')}>
              회사소개서 다운로드
            </a>
          </div>
        </ContentsWrap>

        <Footer />
      </Fragment>
    );
  }
}

export default Contact;
