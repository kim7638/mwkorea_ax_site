import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { ScrollbarsWidthActions } from 'store/actionCreators';

import { Layout } from 'components';

import companyData from 'datas/company';

import faviconSrc from 'assets/images/common/favicon.ico';

class Wrap extends Component {
  componentDidMount() {
    this.scrollbarsWidthUpdate();
  }

  scrollbarsWidthUpdate = () => {
    ScrollbarsWidthActions.updateWidth();
  };

  render() {
    const { props } = this;
    const { children, location, scrollbarsWidth } = props;
    const { pathname } = location;
    const isDetail = Boolean(pathname.match(/^(?:\/mwk-home)*\/portfolio\/detail\//i));
    const isHome = Boolean(pathname.match(/^(?:\/mwk-home)*\/home/i));
    const isDark = Boolean(pathname.match(/^(?:\/mwk-home)*\/about/i));

    return (
      <Fragment>
        <Helmet>
          <title>{companyData.companyName}</title>
          <link rel="icon" href={faviconSrc} type="image/x-icon" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="description" content={companyData.description} />
        </Helmet>
        <style type="text/css">
          {`
          .is-scroll-blocking #___gatsby {
            margin-right: ${scrollbarsWidth}px;
          }
          `}
        </style>
        {!isDetail ? (
          <Layout isHome={isHome} darkMode={isDark}>
            {children}
          </Layout>
        ) : (
          children
        )}
      </Fragment>
    );
  }
}

export default connect((state) => ({
  scrollbarsWidth: state.scrollbarsWidth.width,
}))(Wrap);
