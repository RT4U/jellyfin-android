define(["appStorage","browser"],function(e,n){function o(){return null}function i(){var e={PlayableMediaTypes:["Audio","Video"],SupportsPersistentIdentifier:!1,DeviceProfile:o()};return e}function t(){return new Promise(function(e){require(["fingerprintjs2"],function(n){(new n).get(function(n){e(n)})})})}function r(){var n="_deviceId2",o=e.getItem(n);return o?Promise.resolve(o):t().then(function(o){return e.setItem(n,o),o})}function d(){var e;return e=n.chrome?"Chrome":n.edge?"Edge":n.firefox?"Firefox":n.msie?"Internet Explorer":"Web Browser",n.version&&(e+=" "+n.version),n.ipad?e+=" Ipad":n.iphone?e+=" Iphone":n.android&&(e+=" Android"),e}function u(){return window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.oSpeechRecognition||window.msSpeechRecognition}var a,s=window.dashboardVersion||"3.0";return{getWindowState:function(){return document.windowState||"Normal"},setWindowState:function(){alert("setWindowState is not supported and should not be called")},exit:function(){alert("exit is not supported and should not be called")},supports:function(e){var n=["filedownload","externalpremium","sharing"];return n.push("externallinks"),u()&&n.push("voiceinput"),-1!=n.indexOf(e.toLowerCase())},appInfo:function(){return a?Promise.resolve(a):r().then(function(e){return a={deviceId:e,deviceName:d(),appName:"Emby Mobile",appVersion:s}})},capabilities:i,moreIcon:n.safari||n.edge?"dots-horiz":"dots-vert"}});