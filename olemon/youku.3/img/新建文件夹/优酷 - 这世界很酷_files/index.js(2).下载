// don't break other's code
(function(win, undefined) {
  if (typeof win === 'object' && typeof win.__trackerPatch === 'function') {
    var tracker = win.__trackerPatch();
    if (typeof tracker === 'object') {
      var prevParser = tracker.uaParser;
      var prevBeforeLog = tracker.beforeLog;

      var is360 = (function () {
        var mimeTypes = window.navigator.mimeTypes;
        for (var mt in mimeTypes) {
          if ((mimeTypes[mt] || {}).type === 'application/vnd.chromium.remoting-viewer') {
            return true;
          }
        }
        return false;
      })();

      var isQianniu = (function() {
        return navigator.userAgent.indexOf('Qianniu') > -1;
      })();

      var isQianniuPlugin = isQianniu && (function() {
        return navigator.userAgent.indexOf('Plugin') > -1;
      })();

      tracker.config({
        PATCH_VERSION: '1.0.6',
        uaParser: function() {
          var ua = '';
          if (typeof prevParser === 'function') {
            ua = prevParser.call(tracker);
          }

          if (typeof ua === 'string' && ua) {
            var parts = ua.split(',');
            var browser = parts[0];
            var os = parts[1];

            if (browser && !/\[360\]/.test(browser) && is360) {
              browser = browser + '[360]';
            }

            if (os && !/\[qnp?\]/.test(os) && isQianniu) {
              var flag = '[qn]';
              if (isQianniuPlugin) {
                flag = '[qnp]';
              }

              os = os + flag;
            }

            return browser + ',' + os;
          } else {
            return navigator.userAgent;
          }
        },
        beforeLog: function(options) {
          options = options || {};

          var ret;
          if (typeof prevBeforeLog === 'function') {
            ret = prevBeforeLog.call(this, options);
            if (ret === false) {
              return ret;
            }
          }

          if ((options.pid || '').indexOf('esycm') > -1) {
            if (options.c4 === 6017 || options.c4 === 1300) {
              return false;
            }
          }

          return ret;
        }
      });
    }
  }
})(window);
