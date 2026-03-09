import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout, PortfolioTop, PortfolioOverview, BasicSection, BasicSectionHead, BasicTitle, BasicText, ScrollViewClass } from 'components';

import data from 'datas/portfolio/PrugioSmartHome';

import * as styles from './PrugioSmartHome.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class PrugioSmartHome extends Component {
  render() {
    return (
      <PortfolioLayout data={data}>
        <PortfolioTop
          data={data}
          classNames={{
            wrap: cx('top-wrap'),
          }}
        />

        <PortfolioOverview
          data={data.overview}
          classNames={{
            section: cx('overview'),
          }}
        />

        <ScrollViewClass>
          <div className={cx('project')}>
            <BasicSection>
              <BasicSectionHead className={cx('project__head')}>
                <BasicTitle>Project goal</BasicTitle>
              </BasicSectionHead>

              <p className={cx('project__text')}>
                언제 어디서나
                <br />
                편리하게 제어하는
                <br />
                스마트 홈 서비스
              </p>
              <div className={cx('phone')}>
                <div className={cx('phone__object')}>
                  <div className={cx('phone__inner')}>
                    <img src={imagesSrc['project-1.jpg']} alt="" className={cx('phone__img')} />
                  </div>
                </div>
              </div>
            </BasicSection>
          </div>
        </ScrollViewClass>

        <div className={cx('direction')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>UX/UI Direction</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <BasicText className={cx('direction__text')}>다양한 정보를 직관적이고 효율적인 모듈 구조로 설계함으로써 쉽고 빠른 컨트롤과 맞춤형 정보를 제공합니다.</BasicText>

              <div className={cx('direction__contents')}>
                <div className={cx('direction__contents__text')}>PRUGIO SMART HOME</div>
                <section className={cx('direction-section')}>
                  <div className={cx('direction-section__block')}>
                    <h4 className={cx('direction-section__title')}>Eidetic</h4>
                    <p className={cx('direction-section__text')}>
                      직관적인
                      <br />
                      UX / UI 설계
                    </p>
                  </div>
                </section>
                <section className={cx('direction-section')}>
                  <div className={cx('direction-section__block')}>
                    <h4 className={cx('direction-section__title')}>Easy</h4>
                    <p className={cx('direction-section__text')}>
                      효율적으로 분류하여
                      <br />
                      쉽고 빠른 컨트롤
                    </p>
                  </div>
                </section>
                <section className={cx('direction-section')}>
                  <div className={cx('direction-section__block')}>
                    <h4 className={cx('direction-section__title')}>Smart</h4>
                    <p className={cx('direction-section__text')}>
                      제어 및 현황을
                      <br />
                      맞춤형으로 제공
                    </p>
                  </div>
                </section>

                <div className={cx('direction__contents__arrow')}></div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('design-direction')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Design Direction</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('design-direction__contents')}>
                <ol className={cx('design-direction__list')}>
                  <li className={cx('design-direction__item')}>
                    <div className={cx('design-direction__num')}>1</div>
                    <div className={cx('design-direction__text')}>Premium</div>
                  </li>
                  <li className={cx('design-direction__item')}>
                    <div className={cx('design-direction__num')}>2</div>
                    <div className={cx('design-direction__text')}>Simple</div>
                  </li>
                  <li className={cx('design-direction__item')}>
                    <div className={cx('design-direction__num')}>3</div>
                    <div className={cx('design-direction__text')}>Nature</div>
                  </li>
                </ol>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <section className={cx('color-system')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle>Color System</BasicTitle>
            </BasicSectionHead>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('color-system__contents')}>
              <div className={cx('palette')}>
                <div className={cx('palette__group')}>
                  <div className={cx('palette__item', 'is-primary')}>
                    <div className={cx('palette__text')}>#1A1A1A</div>
                  </div>
                </div>
                <div className={cx('palette__group')}>
                  <div className={cx('palette__item', 'is-turquoise')}>
                    <div className={cx('palette__text')}>#3D9AAB</div>
                  </div>
                  <div className={cx('palette__item', 'is-beige')}>
                    <div className={cx('palette__text')}>#CFB7A4</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollViewClass>
        </section>

        <div className={cx('icongraphy')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Icongraphy</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('icongraphy__contents')}>
                <div className={cx('icons')}>
                  <div className={cx('icons__inner')}>
                    <ul className={cx('icons__list')}>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Washing Machine</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Robot Cleaner</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Air Purifier</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Dishwasher</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Refrigerator</div>
                        </div>
                      </li>
                    </ul>
                    <ul className={cx('icons__list')}>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Parking</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>E/V</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Convenient Facilities</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Car Entry</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Schedule</div>
                        </div>
                      </li>
                    </ul>
                    <ul className={cx('icons__list')}>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Phone Call</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Go Out</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Standby Power</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Gaming</div>
                        </div>
                      </li>
                      <li className={cx('icons__item')}>
                        <div className={cx('icons__block')}>
                          <div className={cx('icons__img')}></div>
                          <div className={cx('icons__text')}>Sleep</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('typography')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Typography</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('typography__contents')}>
                <div className={cx('font')}>
                  <ul className={cx('font__list')}>
                    <li className={cx('font__item', 'is-en')}>
                      <div className={cx('font__block')}>
                        <div className={cx('font__example')}>aA</div>
                        <div className={cx('font__example-text')}>Be Smart</div>
                        <div className={cx('font__name')}>NOTO SANS REGULAR</div>
                      </div>
                    </li>
                    <li className={cx('font__item', 'is-bold', 'is-en')}>
                      <div className={cx('font__block')}>
                        <div className={cx('font__example')}>aA</div>
                        <div className={cx('font__example-text')}>Be Smart</div>
                        <div className={cx('font__name')}>NOTO SANS BOLD</div>
                      </div>
                    </li>
                  </ul>
                  <ul className={cx('font__list')}>
                    <li className={cx('font__item')}>
                      <div className={cx('font__block')}>
                        <div className={cx('font__example')}>가나다</div>
                        <div className={cx('font__example-text')}>스마트 라이프의 시작</div>
                        <div className={cx('font__name')}>NOTO SANS KR REGULAR</div>
                      </div>
                    </li>
                    <li className={cx('font__item', 'is-bold')}>
                      <div className={cx('font__block')}>
                        <div className={cx('font__example')}>가나다</div>
                        <div className={cx('font__example-text')}>스마트 라이프의 시작</div>
                        <div className={cx('font__name')}>NOTO SANS KR BOLD</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <div className={cx('home')}>
          <BasicSection>
            <BasicSectionHead>
              <BasicTitle>Home UX/UI</BasicTitle>
            </BasicSectionHead>

            <ScrollViewClass>
              <div className={cx('home__contents')}>
                <div className={cx('view-images', 'home__phone')}>
                  <div className={cx('view-images__item')}>
                    <div className={cx('view-images__block')}>
                      <img src={imagesSrc['home-1.jpg']} alt="" className={cx('device-img')} />
                      <div className={cx('home__phone__theme')}>
                        <div className={cx('home__phone__theme-title')}>
                          <span className="inline-block">다양한</span> <span className="inline-block">테마 설정</span>
                        </div>
                        <div className={cx('home__phone__theme-text')}>
                          <span className="inline-block">DEFAULT .</span> <span className="inline-block">DARK .</span> <span className="inline-block">WHITE</span>
                        </div>
                      </div>
                    </div>
                    <div className={cx('view-images__block')}>
                      <img src={imagesSrc['home-3.jpg']} alt="" className={cx('device-img')} />
                    </div>
                  </div>
                  <div className={cx('view-images__item')}>
                    <div className={cx('view-images__block')}>
                      <img src={imagesSrc['home-2.jpg']} alt="" className={cx('device-img')} />
                    </div>
                  </div>
                </div>
                <div className={cx('home__contents__bg')}></div>
              </div>
            </ScrollViewClass>
          </BasicSection>
        </div>

        <section className={cx('device')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle>Samsung Smartthings</BasicTitle>
            </BasicSectionHead>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'device__phone')}>
              <div className={cx('view-images')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['device-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['device-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['device-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['device-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('device__phone__bg')}></div>
            </div>
          </ScrollViewClass>
        </section>

        <section className={cx('control')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle>Smart Control</BasicTitle>
            </BasicSectionHead>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'control__phone')}>
              <div className={cx('view-images')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['control-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['control-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['control-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['control-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollViewClass>
        </section>

        <section className={cx('convenience')}>
          <BasicSection tagName="div">
            <BasicSectionHead>
              <BasicTitle>Convenience</BasicTitle>
            </BasicSectionHead>
          </BasicSection>

          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'convenience__phone')}>
              <div className={cx('view-images', 'is-subsize')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['convenience-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['convenience-3.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['convenience-2.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['convenience-3.png']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollViewClass>
        </section>

        <div className={cx('gallery')}>
          <ScrollViewClass>
            <div className={cx('view-images-wrap', 'gallery__phone')}>
              <div className={cx('view-images', 'is-subsize')}>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-1.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-5.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-2.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-5.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-4.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={`${cx('view-images__block')} is-mobile-only`}>
                    <img src={imagesSrc['gallery-6.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
                <div className={cx('view-images__item')}>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-3.jpg']} alt="" className={cx('device-img')} />
                  </div>
                  <div className={cx('view-images__block')}>
                    <img src={imagesSrc['gallery-6.jpg']} alt="" className={cx('device-img')} />
                  </div>
                </div>
              </div>
              <div className={cx('gallery__phone__bg')}></div>
            </div>
          </ScrollViewClass>
        </div>
      </PortfolioLayout>
    );
  }
}

export default PrugioSmartHome;
