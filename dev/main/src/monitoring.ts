import ConfigCommon from '../../config.json';

declare global {
  interface Window {
    fetchM: Function;
    unhandledrejectionError: Function;
    normalError: Function;
    DynamicResource: Function;
    resourceError: Function;
  }
}

window.fetchM = function fetchM() {
  const xhr = new XMLHttpRequest();
  xhr.open('get', `http://localhost:${ConfigCommon.mainPort}/mainApp`, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log('mainApp xhr');
    }
  };
  xhr.send(null);

  fetch(
    `http://localhost:${ConfigCommon.mainPort}/fetch/mainApp`,
  ).then((res) => {});
};

window.unhandledrejectionError = function unhandledrejectionError() {
  setTimeout(() => {
    throw Error('mainApp: unhandledrejection error');
  }, 500);
};

window.normalError = function normalError() {
  throw Error('mainApp: normal error');
};

window.DynamicResource = function DynamicResource() {
  const sc = document.createElement('script');
  sc.src = `http://localhost:${ConfigCommon.mainPort}/monitoring/dynamicScript.js`;
  document.body.appendChild(sc);

  const link = document.createElement('link');
  link.href = `http://localhost:${ConfigCommon.mainPort}/monitoring/dynamicLink.css`;
  document.body.appendChild(link);
};

window.resourceError = function resourceError() {
  // resource error
  const sc = document.createElement('script');
  sc.src = `http://localhost:1111/monitoring/xxxxx.js`;
  document.body.appendChild(sc);
};
