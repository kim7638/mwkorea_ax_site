import React, { Component } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { ScrollBlockActions } from 'store/actionCreators';

import { stylesCopyConvertDashes, getScrollPosition } from 'utils/core';

import companyData from 'datas/company';

import SVGLogo from 'assets/images/common/logo.inline.svg';

import * as styles from './Layout.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gnbOpened: false,
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

  gnbOpen = () => {
    this.setState(
      {
        gnbOpened: true,
      },
      () => {
        ScrollBlockActions.block();
      }
    );
  };

  gnbClose = () => {
    this.setState(
      {
        gnbOpened: false,
      },
      () => {
        ScrollBlockActions.clear();
      }
    );
  };

  gnbToggle = () => {
    this.setState(
      {
        gnbOpened: !this.state.gnbOpened,
      },
      () => {
        if (this.state.gnbOpened) {
          ScrollBlockActions.block();
        } else {
          ScrollBlockActions.clear();
        }
      }
    );
  };

  render() {
    const { props, state, gnbToggle, gnbClose } = this;
    const { children, isHome, scrollbarsWidth, darkMode } = props;
    const { gnbOpened, isScroll } = state;

    return (
      <div
        className={cx('wrap', {
          'is-home': isHome,
          'is-scroll': isScroll,
          'is-dark': darkMode,
        })}
      >
        <style type="text/css">
          {`
          .is-scroll-blocking .${cx('head__gnb-opener')} {
            margin-right: ${scrollbarsWidth}px;
          }
          .is-scroll-blocking .${cx('gnb-wrap')} {
            padding-right: ${scrollbarsWidth}px;
          }
          `}
        </style>

        <header
          className={cx('head', {
            'is-gnb-opened': gnbOpened,
          })}
        >
          <h1 className={cx('head__logo')}>
            <Link to="/" className={cx('head__logo__link')} onClick={gnbClose}>
              <SVGLogo />
              <span className="for-a11y">{companyData.companyName}</span>
            </Link>
          </h1>

          <button type="button" className={cx('head__gnb-opener')} onClick={gnbToggle}>
            <span className="for-a11y">
              메뉴
              <span className={cx('open-text')}>열기</span>
              <span className={cx('close-text')}>닫기</span>
            </span>
          </button>
        </header>

        <div className={cx('head-bg')}></div>

        <div
          className={cx('gnb-wrap', {
            'is-opened': gnbOpened,
          })}
        >
          <nav className={cx('gnb')}>
            <h2 className="for-a11y">내비게이션</h2>
            <ul className={cx('gnb__list')}>
              <li className={cx('gnb__item')}>
                <Link to="/about" className={cx('gnb__link')} onClick={gnbClose}>
                  <span className={cx('gnb__link-text')}>About</span>
                </Link>
              </li>
              <li className={cx('gnb__item')}>
                <Link to="/portfolio/list" className={cx('gnb__link')} onClick={gnbClose}>
                  <span className={cx('gnb__link-text')}>Works</span>
                </Link>
              </li>
              <li className={cx('gnb__item')}>
                <Link to="/contact" className={cx('gnb__link')} onClick={gnbClose}>
                  <span className={cx('gnb__link-text')}>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={cx('body')}>{children}</div>
      </div>
    );
  }
}

export default connect((state) => ({
  scrollbarsWidth: state.scrollbarsWidth.width,
}))(Layout);
