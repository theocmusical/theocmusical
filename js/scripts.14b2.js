!function(){var a=function(){var a=document.querySelector(".hero"),b=document.querySelector(".hero__image"),c=function(){a.style.height=b.clientHeight+"px"};c(),window.addEventListener("resize",function(){window.requestAnimationFrame(c)},!0)},b=function(){var a=document.querySelector(".hero__image");window.addEventListener("scroll",function(){window.requestAnimationFrame(function(){var b=window.scrollY;a.style="transform: translate3d(0px, "+b/2+"px, 0)"})})};a(),b()}(),!function(a,b,c){"use strict";function d(){var b=a.getElementsByTagName("iframe"),c=a.getElementsByTagName("embed");e(b),e(c)}function e(a){var b;for(b=0;b<a.length;b++){var c=f(a[b]);if(c){var d=g(a[b]);h(d)}}}function f(a){var b=a.src||"";return b.indexOf("youtube.com/embed/")>-1||b.indexOf("youtube.com/v/")>-1?!0:!1}function g(c){var d=a.createElement("a");d.href=c.src,d.hostname="www.youtube.com",d.protocol=a.location.protocol;var e="/"===d.pathname.charAt(0)?d.pathname:"/"+d.pathname,f=b.location.protocol+"%2F%2F"+b.location.hostname+(b.location.port?":"+b.location.port:"");if(-1===d.search.indexOf("enablejsapi")&&(d.search=(d.search.length>0?d.search+"&":"")+"enablejsapi=1"),-1===d.search.indexOf("origin")&&-1===b.location.hostname.indexOf("localhost")&&(d.search=d.search+"&origin="+f),"application/x-shockwave-flash"===c.type){var g=a.createElement("iframe");g.height=c.height,g.width=c.width,e=e.replace("/v/","/embed/"),c.parentNode.parentNode.replaceChild(g,c.parentNode),c=g}return d.pathname=e,c.src!==d.href+d.hash&&(c.src=d.href+d.hash),c}function h(a){a.pauseFlag=!1,new YT.Player(a,{events:{onStateChange:function(b){k(b,a)}}})}function i(a){var b={};if(n.events["Watch to End"]&&(b["Watch to End"]=99*a/100),n.percentageTracking){var c,d=[];if(n.percentageTracking.each&&(d=d.concat(n.percentageTracking.each)),n.percentageTracking.every){var e=parseInt(n.percentageTracking.every,10),f=100/e;for(c=1;f>c;c++)d.push(c*e)}for(c=0;c<d.length;c++){var g=d[c],h=g+"%",i=a*g/100;b[h]=Math.floor(i)}}return b}function j(a,b,c){var d=(a.getDuration(),a.getCurrentTime());a.getPlaybackRate(),a[c]=a[c]||{};var e;for(e in b)b[e]<=d&&!a[c][e]&&(a[c][e]=!0,l(c,e))}function k(a,b){var c=a.data,d=a.target,e=d.getVideoUrl(),f=e.match(/[?&]v=([^&#]*)/)[1],g=d.getPlayerState(),h=d.getDuration(),k=i(h),m={1:"Play",2:"Pause"},n=m[c];if(b.playTracker=b.playTracker||{},1!==g||b.timer?(clearInterval(b.timer),b.timer=!1):(clearInterval(b.timer),b.timer=setInterval(function(){j(d,k,b.videoId)},1e3)),1===c&&(b.playTracker[f]=!0,b.videoId=f,b.pauseFlag=!1),!b.playTracker[b.videoId])return!1;if(2===c){if(b.pauseFlag)return!1;b.pauseFlag=!0}q[n]&&l(b.videoId,n)}function l(a,c){var d="https://www.youtube.com/watch?v="+a,e=b.GoogleAnalyticsObject;"undefined"==typeof b[p]||n.forceSyntax?"function"==typeof b[e]&&"function"==typeof b[e].getAll&&2!==n.forceSyntax?b[e]("send","event","Videos",c,d):"undefined"!=typeof b._gaq&&1!==o&&b._gaq.push(["_trackEvent","Videos",c,d]):b[p].push({event:"youTubeTrack",attributes:{videoUrl:d,videoAction:c}})}b.onYouTubeIframeAPIReady=function(){var a=b.onYouTubeIframeAPIReady;return function(){a&&a.apply(this,arguments),navigator.userAgent.match(/MSIE [67]\./gi)||d()}}();var m,n=c||{},o=n.forceSyntax||0,p=n.dataLayerName||"dataLayer",q={Play:!0,Pause:!0,"Watch to End":!0};for(m in n.events)n.events.hasOwnProperty(m)&&(q[m]=n.events[m]);var r=a.createElement("script");r.src="//www.youtube.com/iframe_api";var s=a.getElementsByTagName("script")[0];s.parentNode.insertBefore(r,s)}(document,window,{events:{Play:!0,Pause:!0,"Watch to End":!0},percentageTracking:{every:25,each:[10,90]}});