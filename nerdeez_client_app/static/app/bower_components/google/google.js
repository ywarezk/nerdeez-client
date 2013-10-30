/**
 * this file will activate the google api
 * 
 * Created October 30th
 * @author Doron Nachshon
 * @copyright: nerdeez Ltd
 * @version: 1.0
 * 
 */

window.___gcfg = {
  lang: 'zh-CN',
  parsetags: 'onload'
};
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
