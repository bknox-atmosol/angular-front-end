 /*!
     * $script.js v2.5.7
     * https://github.com/ded/script.js
     * Copyright: @ded & @fat - Dustin Diaz, Jacob Thornton 2011
     * Follow our software http://twitter.com/dedfat
     * License: MIT
     */
     !function(n,t){"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):this[n]=t()}("$script",function(){function n(n,t){for(var e=0,o=n.length;o>e;++e)if(!t(n[e]))return c;return 1}function t(t,e){n(t,function(n){return!e(n)})}function e(r,u,f){function c(n){return n.call?n():s[n]}function l(){if(!--y){s[v]=1,g&&g();for(var e in m)n(e.split("|"),c)&&!t(m[e],c)&&(m[e]=[])}}r=r[a]?r:[r];var d=u&&u.call,g=d?u:f,v=d?r.join(""):u,y=r.length;return setTimeout(function(){t(r,function n(t,e){return null===t?l():(t=e||-1!==t.indexOf(".js")||/^https?:\/\//.test(t)||!i?t:i+t+".js",p[t]?(v&&(h[v]=1),2==p[t]?l():setTimeout(function(){n(t,!0)},0)):(p[t]=1,v&&(h[v]=1),void o(t,l)))})},0),e}function o(n,t){var e,o=u.createElement("script");o.onload=o.onerror=o[d]=function(){o[l]&&!/^c|loade/.test(o[l])||e||(o.onload=o[d]=null,e=1,p[n]=2,t())},o.async=1,o.src=r?n+(-1===n.indexOf("?")?"?":"&")+r:n,f.insertBefore(o,f.lastChild)}var i,r,u=document,f=u.getElementsByTagName("head")[0],c=!1,a="push",l="readyState",d="onreadystatechange",s={},h={},m={},p={};return e.get=o,e.order=function(n,t,o){!function i(r){r=n.shift(),n.length?e(r,i):e(r,t,o)}()},e.path=function(n){i=n},e.urlArgs=function(n){r=n},e.ready=function(o,i,r){o=o[a]?o:[o];var u=[];return!t(o,function(n){s[n]||u[a](n)})&&n(o,function(n){return s[n]})?i():!function(n){m[n]=m[n]||[],m[n][a](i),r&&r(u)}(o.join("|")),e},e.done=function(n){e([null],n)},e});
 

var path = "assets/js/";

$script.ready('app',function(){
  //Load any app scripts here.
  //  $script([path+'controllers/main.js'], function(){
      angular.bootstrap(document,['app']);
  //  });
});

$script.ready('ngScripts',function(){
  $script(path+'app.js','app');
});

$script.ready('ngCore',function(){
  $script([
    path+'core/angular-sanitize.min.js',
    path+'core/angular-route.min.js',
    path+'core/ui-bootstrap.min.js'
  ], 'ngScripts');
  
});

$script(path+'core/angular.min.js','ngCore');
