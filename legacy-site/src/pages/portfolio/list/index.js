import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { ContentsWrap, Footer } from 'components';

import datas from 'datas/portfolio';

import * as styles from './List.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const thumbImagesSrc = importImages(require.context('./images/thumb/', false, /\.(png|jpe?g|gif)$/));
const logoImagesSrc = importImages(require.context('./images/logo/', false, /\.(svg)$/));

class List extends Component {
  constructor(props) {
    super(props);

    this.thumbRefs = {};
    datas.forEach((data) => {
      this.thumbRefs[data.id] = React.createRef();
    });
  }

  render() {
    const { thumbRefs } = this;

    return (
      <Fragment>
        <ContentsWrap>
          <h2 className="for-a11y">Works</h2>

          <p className={cx('top-text')}>
            경험을 창조하는 <span className="inline-block">끊임없는 변화,</span>
            <br />
            그러나 변함없는 디자인
          </p>

          <div className={cx('portfolios')}>
            <ul className={cx('portfolios__list')}>
              {datas &&
                datas.map((data) => (
                  <li className={cx('portfolios__item')} key={data.id}>
                    <div className={cx('portfolios__block')}>
                      <div className={cx('portfolios__thumb')} ref={thumbRefs[data.id]}>
                        <div className={cx('portfolios__thumb__img')}>
                          {thumbImagesSrc[data.id + '.jpg'] && (
                            <img
                              src={thumbImagesSrc[data.id + '.jpg']}
                              alt=""
                              onError={() => {
                                thumbRefs[data.id].current.classList.add(cx('is-error'));
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div className={cx('portfolios__info')}>
                        <p className={cx('portfolios__year')}>
                          <span className="for-a11y">제작 년도 : </span>
                          {(() => {
                            const date = (() => {
                              const endDate = data.overview.date.end;
                              if (Array.isArray(endDate)) {
                                return endDate[endDate.length - 1];
                              } else if (typeof endDate === 'string') {
                                return endDate;
                              }
                            })();
                            
                            if (date === '현재') {
                              const startDate = (() => {
                                const start = data.overview.date.start;
                                if (Array.isArray(start)) {
                                  return start[0];
                                } else if (typeof start === 'string') {
                                  return start;
                                }
                              })();
                              return `20${startDate.replace(/^(\d+)\.\d+$/g, '$1')}`;
                              // const currentYear = new Date().getFullYear().toString().slice(-2);
                              // return `20${currentYear}`;
                            }
                            
                            return `20${date.replace(/^(\d+)\.\d+$/g, '$1')}`;
                          })()}
                        </p>
                        <p className={cx('portfolios__service')}>
                          <span className="for-a11y">서비스 : </span>
                          {data.service}
                        </p>
                      </div>
                      <p className={cx('portfolios__title')}>
                        <span className="for-a11y">프로젝트 명 : </span>
                        {data.title.split('\n').map((line, i) => {
                          return (
                            <Fragment key={i}>
                              {i > 0 && <br />}
                              {line}
                            </Fragment>
                          );
                        })}
                      </p>
                      {!data.hideDetail && (
                        <Link to={`/portfolio/detail/${data.id}`} className={cx('portfolios__link')}>
                          <span className={cx('portfolios__link__text')}>VIEW</span>
                        </Link>
                      )}
                      <div className={cx('portfolios__logo')}>
                        <div
                          className={cx('portfolios__logo__img')}
                          style={
                            logoImagesSrc[data.id + '.svg'] && {
                              backgroundImage: `url('${logoImagesSrc[data.id + '.svg']}')`,
                            }
                          }
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </ContentsWrap>

        <Footer />
      </Fragment>
    );
  }
}

export default List;
