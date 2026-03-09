import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes } from 'utils/core';

import { BasicSection, BasicSectionHead, BasicTitle, BasicText, DataList } from 'components';

import * as styles from './PortfolioOverview.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

class PortfolioOverview extends Component {
  render() {
    const { props } = this;
    const {
      data,
      children,
      classNames = {
        section: '',
        head: '',
        title: '',
        info: '',
        description: '',
      },
    } = props;

    const date = (() => {
      let result = '';
      if (Array.isArray(data.date.start)) {
        data.date.start.forEach((el, i) => {
          result += `${i > 0 ? ' / ' : ''}${el} - ${data.date.end[i]}`;
        });
      } else if (typeof data.date.start === 'string') {
        result += `${data.date.start} - ${data.date.end}`;
      }
      return result;
    })();

    const info = [
      {
        key: 'Date',
        val: date,
      },
      {
        key: 'Client',
        val: data.client,
      },
    ];

    return (
      <BasicSection className={cx('section', classNames.section)}>
        <BasicSectionHead className={cx(classNames.head)}>
          <BasicTitle className={cx(classNames.title)}>Overview</BasicTitle>
        </BasicSectionHead>
        <DataList
          data={info}
          classNames={{
            wrap: cx('info', classNames.info),
          }}
        />
        {data.description && <BasicText className={cx(classNames.description)}>{data.description}</BasicText>}
        {children}
      </BasicSection>
    );
  }
}

export default PortfolioOverview;
