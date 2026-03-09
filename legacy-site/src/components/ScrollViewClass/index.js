import React, { Component } from 'react';
import cx from 'classnames';

import { getScrollPosition } from 'utils/core';

class ScrollViewClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      once: false,
      toggle: false,
    };
    this.ref = React.createRef();
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
    const { ref } = this;
    const { current: el } = ref;

    if (!Boolean(el)) {
      return;
    }

    const windowScrollPosition = getScrollPosition();
    const { y = 0 } = el.getBoundingClientRect();
    const gap = Math.round(window.innerHeight * 0.6);
    const position = Math.round(y) + windowScrollPosition.top - gap;

    if (windowScrollPosition.top >= position) {
      this.setState({
        once: true,
        toggle: true,
      });
    } else if (windowScrollPosition.top < position) {
      this.setState({
        toggle: false,
      });
    }
  };

  render() {
    const { props, state } = this;
    const { children, className, tagName = 'div' } = props;
    const { once, toggle } = state;
    const classNames = {
      once: 'scroll-view-class-once',
      toggle: 'scroll-view-class-toggle',
    };
    const TagName = tagName;

    return (
      <TagName
        className={cx(className, {
          [classNames.once]: once,
          [classNames.toggle]: toggle,
        })}
        ref={this.ref}
      >
        {children}
      </TagName>
    );
  }
}

export default ScrollViewClass;
