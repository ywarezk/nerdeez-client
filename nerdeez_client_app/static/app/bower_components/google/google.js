/**
 * this file will activate the google api
 * 
 * Created October 27th 2013
 * @author Doron Nachshon
 * @copyright: nerdeez Ltd
 * @version: 1.0
 * 
 */


// Load the SDK asynchronously

window.___gcfg = {
  lang: 'zh-CN',
  parsetags: 'onload'
};

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js?onload=onLoadCallback';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();