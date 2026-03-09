import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, getScrollPosition } from 'utils/core';

import { Footer } from 'components';

import SVGIconBack from 'assets/images/icon/back.inline.svg';

import companyData from 'datas/company';

import * as styles from './PortfolioLayout.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

class PortfolioLayout extends Component {
  static defaultProps = {
    classNames: {
      back__icon: '',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      isScroll: false,
    };
  }

  componentDidMount() {
    window.removeEventListener('scroll', this.scroll);
    window.addEventListener('scroll', this.scroll);
    this.scroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    const { state } = this;
    const { isScroll } = state;
    const windowScrollPosition = getScrollPosition();
    if (windowScrollPosition.top > 0 && !isScroll) {
      this.setState({
        isScroll: true,
      });
    } else if (windowScrollPosition.top <= 0 && isScroll) {
      this.setState({
        isScroll: false,
      });
    }
  };

  render() {
    const { props, state } = this;
    const { data, children, classNames, darkMode } = props;
    const { isScroll } = state;

    return (
      <div
        className={cx('wrap', {
          'is-scroll': isScroll,
          'is-dark': darkMode,
        })}
      >
        <div className={cx('head')}>
          <h1 className="for-a11y">{companyData.companyName}</h1>
          <h2 className={cx('for-a11y')}>{data.name}</h2>
          <button
            type="button"
            className={cx('back')}
            onClick={() => {
              window.history.back();
            }}
          >
            <span className={cx('for-a11y')}>뒤로</span>
            <SVGIconBack className={cx('back__icon', classNames.back__icon)} />
          </button>
        </div>

        <div className={cx('body')}>{children}</div>

        <Footer />
      </div>
    );
  }
}

export default PortfolioLayout;
