// stylesCopyConvertDashes
const stylesCopyConvertDashes = (styles) => {
  const keys = Object.keys(styles);

  keys.forEach((key) => {
    if (key.match(/[A-Z]/g)) {
      const convertKey = key.replace(/([a-z])([A-Z])/g, ($0, $1, $2) => {
        return `${$1}-${$2.toLowerCase()}`;
      });
      styles[convertKey] = styles[key];
    }
  });

  return styles;
};

// import images
const importImages = (r) => {
  const files = {};
  r.keys().forEach((item) => {
    const data = r(item);
    files[item.replace('./', '')] = data.default;
  });

  return files;
};

// import default script
const importDefaultScript = (r) => {
  const files = {};

  r.keys()
    .filter((item) => {
      return item.match(/^.\//g);
    })
    .forEach((item) => {
      const data = r(item);
      files[item.replace(/^.\/|\.js$/g, '')] = data.default;
    });

  return files;
};

// get scroll position
const getScrollPosition = () => {
  const supportPageOffset = window.scrollX !== undefined;
  const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';

  const x = supportPageOffset ? window.scrollX : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
  const y = supportPageOffset ? window.scrollY : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

  return {
    top: Math.round(y),
    left: Math.round(x),
  };
};

// getUserAgent
const getUserAgent = () => {
  const userAgent = navigator.userAgent;
  const userAgentCheck = {
    ieMode: document.documentMode,
    isIos: Boolean(userAgent.match(/iPod|iPhone|iPad/)),
    isAndroid: Boolean(userAgent.match(/Android/)),
  };
  if (userAgent.match(/Edge/gi)) {
    userAgentCheck.ieMode = 'edge';
  }
  userAgentCheck.androidVersion = (() => {
    if (userAgentCheck.isAndroid) {
      try {
        var match = userAgent.match(/Android ([0-9]+\.[0-9]+(\.[0-9]+)*)/);
        return match[1];
      } catch (e) {
        console.log(e);
      }
    }
  })();

  return userAgentCheck;
};

export { stylesCopyConvertDashes, importImages, getScrollPosition, importDefaultScript, getUserAgent };
