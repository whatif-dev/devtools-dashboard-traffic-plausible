!function(){"use strict";var e,t,i,n,r=window.location,o=window.document,l=o.getElementById("plausible"),p=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event"),s=window.localStorage.plausible_ignore,w=l&&l.getAttribute("data-exclude").split(",");function d(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(!(window.phantom||window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==s)return d("localStorage flag");if(w)for(var i=0;i<w.length;i++)if("pageview"==e&&r.pathname.match(new RegExp("^"+w[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return d("exclusion rule");var n={};n.n=e,n.u=r.href,n.d=l.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=JSON.stringify(t.props));var a=new XMLHttpRequest;a.open("POST",p,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4==a.readyState&&t&&t.callback&&t.callback()}}}function u(){n!==r.pathname&&(n=r.pathname,a("pageview"))}var c,g=window.history;g.pushState&&(c=g.pushState,g.pushState=function(){c.apply(this,arguments),u()},window.addEventListener("popstate",u));var f=window.plausible&&window.plausible.q||[];window.plausible=a;for(var h=0;h<f.length;h++)a.apply(this,f[h]);"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){n||"visible"!==o.visibilityState||u()}):u()}();