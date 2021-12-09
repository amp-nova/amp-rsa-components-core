import React from 'react';
import { Box, Typography, Button, Grid, Card as Card$1, CardContent, CardActions, Accordion, AccordionSummary, AccordionDetails, Link, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ":root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #3c3c3c;\n    --font-color: #fafafa; } }\n\n.amp-dc-image {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  display: block; }\n  .amp-dc-image .amp-dc-image-pic {\n    display: block; }\n  .amp-dc-image img {\n    width: 100%;\n    user-select: none; }\n\n.amp-dc-image-holder {\n  position: relative;\n  width: auto; }\n\n.amp-ca-image-actions {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  .amp-ca-image-actions .amp-ca-spot {\n    position: absolute;\n    cursor: pointer;\n    line-height: initial; }\n  .amp-ca-image-actions .amp-ca-poly {\n    position: absolute;\n    cursor: pointer; }\n  .amp-ca-image-actions .amp-ca-image-actions {\n    width: 100%;\n    height: 100%;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .amp-ca-image-actions .amp-ca-spot-btn {\n    border: 2px solid #ffffff;\n    background: #000000;\n    -webkit-border-radius: 16;\n    -moz-border-radius: 16;\n    -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);\n    border-radius: 16px;\n    border-color: #ffffff;\n    font-family: \"Hoefler Text\", \"Baskerville Old Face\", Garamond, \"Times New Roman\", serif;\n    font-size: 18px;\n    font-style: italic;\n    font-variant: normal;\n    font-weight: bold;\n    color: #ffffff;\n    padding: 5px 10px 5px 10px !important;\n    text-decoration: none;\n    opacity: 1;\n    position: absolute;\n    left: -8px;\n    top: -8px; }\n    .amp-ca-image-actions .amp-ca-spot-btn:hover {\n      background: #000000;\n      border: 2px solid #b01c4d;\n      color: #b01c4d;\n      text-decoration: none;\n      opacity: 1;\n      font-size: 18px; }\n  .amp-ca-image-actions .tooltip-toggle {\n    cursor: pointer;\n    position: relative; }\n  .amp-ca-image-actions .tooltip-toggle::before {\n    position: absolute;\n    top: -60px;\n    left: -80px;\n    background-color: white;\n    border-radius: 5px;\n    color: #000;\n    content: attr(data-tooltip);\n    padding: 1rem;\n    text-transform: none;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    width: 160px;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: normal; }\n  .amp-ca-image-actions .tooltip-toggle::before,\n  .amp-ca-image-actions .tooltip-toggle::after {\n    color: #000000;\n    font-size: 16px;\n    opacity: 0;\n    pointer-events: none;\n    text-align: center; }\n  .amp-ca-image-actions .tooltip-toggle:hover::before,\n  .amp-ca-image-actions .tooltip-toggle:hover::after {\n    opacity: 1;\n    -webkit-transition: all 0.75s ease;\n    transition: all 0.75s ease; }\n";
styleInject(css_248z$5);

// Generated with util/create-component.js
var Image = function (_a) {
    var display = _a.display, image = _a.image, imageAltText = _a.imageAltText, seoText = _a.seoText, query = _a.query;
    if (!image) {
        return null;
    }
    var getImageHost = function (host) {
        if (host === 'i1.adis.ws') {
            return 'cdn.media.amplience.net';
        }
        return host;
    };
    var buildSrcUrl = function (_a) {
        var width = _a.width, poiAspect = _a.poiAspect, format = _a.format;
        var baseUrl = "https://" + getImageHost(image.defaultHost) + "/i/" + image.endpoint + "/" + encodeURIComponent(image.name);
        if (seoText) {
            baseUrl += "/" + encodeURIComponent(seoText);
        }
        if (format) {
            baseUrl += "." + format;
        }
        var queryString = "w=" + width + "&upscale=false&strip=true";
        if (display == 'Point of Interest' && poiAspect) {
            queryString += "&$poi$&aspect=" + poiAspect;
        }
        if (query) {
            queryString += "&" + query;
        }
        return baseUrl + "?" + queryString;
    };
    var source = function (_a) {
        var minWidth = _a.minWidth, maxWidth = _a.maxWidth, width = _a.width, highDensityWidth = _a.highDensityWidth, format = _a.format, poiAspect = _a.poiAspect;
        return React.createElement("source", { srcSet: buildSrcUrl({ width: width, format: format, poiAspect: poiAspect }) + " 1x, " + buildSrcUrl({ width: highDensityWidth, format: format, poiAspect: poiAspect }), media: minWidth ? "(min-width: " + minWidth + "px)" : (maxWidth ? "(max-width: " + maxWidth + "px)" : undefined), type: format ? "image/" + format : undefined });
    };
    var imageTag = display == 'Static' ? (React.createElement("picture", { className: "amp-dc-image" },
        React.createElement("img", { "data-testid": "Image-ImgTag", loading: "lazy", src: "//" + image.endpoint + ".a.bigcontent.io/v1/static/" + image.name, className: "amp-dc-image-pic", alt: imageAltText }))) : (React.createElement("picture", { className: "amp-dc-image" },
        source({ minWidth: '1280', width: '1600', highDensityWidth: '3200', format: 'webp', poiAspect: '2:1' }),
        source({ minWidth: '1280', width: '1600', highDensityWidth: '3200', poiAspect: '2:1' }),
        source({ minWidth: '1024', width: '1280', highDensityWidth: '2560', format: 'webp', poiAspect: '2:1' }),
        source({ minWidth: '1024', width: '1280', highDensityWidth: '2560', poiAspect: '2:1' }),
        source({ minWidth: '768', width: '1024', highDensityWidth: '2048', format: 'webp', poiAspect: '1.5:1' }),
        source({ minWidth: '768', width: '1024', highDensityWidth: '2048', poiAspect: '1.5:1' }),
        source({ maxWidth: '768', width: '768', highDensityWidth: '1536', format: 'webp', poiAspect: '1:1' }),
        source({ maxWidth: '768', width: '768', highDensityWidth: '1536', poiAspect: '1:1' }),
        React.createElement("img", { "data-testid": "Image-ImgTag", loading: "lazy", src: buildSrcUrl({ width: '1600' }), className: "amp-dc-image-pic", alt: imageAltText })));
    return React.createElement(Box, { "data-testid": "Image", className: "amp-dc-image-holder" }, imageTag);
};

var css_248z$4 = ":root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #3c3c3c;\n    --font-color: #fafafa; } }\n\n.container {\n  position: relative;\n  text-align: center;\n  color: white; }\n  .container .info-panel {\n    position: absolute;\n    background-color: #ccc;\n    padding: 25px 15% 25px 15%;\n    min-width: 25%; }\n    .container .info-panel h2 {\n      margin-bottom: 15px; }\n    .container .info-panel h3 {\n      margin-bottom: 10px; }\n    .container .info-panel button {\n      margin-top: 20px; }\n  .container .bottom {\n    bottom: 0px; }\n  .container .left {\n    left: 0px; }\n  .container .right {\n    right: 0px; }\n  .container .top {\n    top: 0px; }\n  .container .middle {\n    top: 50%;\n    transform: translateY(-50%); }\n  .container .center {\n    left: 50%;\n    transform: translateX(-50%); }\n  .container .center.middle {\n    transform: translateX(-50%) translateY(-50%); }\n";
styleInject(css_248z$4);

var Banner = function (_a) {
    var image = _a.image, _b = _a.opacity, opacity = _b === void 0 ? 0.9 : _b, _c = _a.textPositioning, textPositioning = _c === void 0 ? { textPositionHorizontal: 'center', textPositionVertical: 'middle' } : _c, bannerText = _a.bannerText, ctaSettings = _a.ctaSettings;
    var alignement = ['info-panel'];
    (textPositioning === null || textPositioning === void 0 ? void 0 : textPositioning.textPositionHorizontal) && alignement.push(textPositioning.textPositionHorizontal);
    (textPositioning === null || textPositioning === void 0 ? void 0 : textPositioning.textPositionVertical) && alignement.push(textPositioning.textPositionVertical);
    return (React.createElement(Box, { className: "container", "data-testid": "Banner" },
        React.createElement(Image, __assign({}, image)),
        React.createElement(Box, { className: alignement.join(" "), style: { opacity: opacity, textAlign: 'left' } },
            (bannerText === null || bannerText === void 0 ? void 0 : bannerText.header) && (React.createElement(Typography, { variant: "h2", component: "h2" }, bannerText.header)),
            (bannerText === null || bannerText === void 0 ? void 0 : bannerText.subheader) && (React.createElement(Typography, { variant: "h3", component: "h3" }, bannerText.subheader)),
            (bannerText === null || bannerText === void 0 ? void 0 : bannerText.description) && (React.createElement(Typography, { variant: "body1", component: "p" }, bannerText.description)),
            (ctaSettings === null || ctaSettings === void 0 ? void 0 : ctaSettings.buttonText) && (React.createElement(Box, { style: { textAlign: 'right' } },
                React.createElement(Button, { href: ctaSettings === null || ctaSettings === void 0 ? void 0 : ctaSettings.linkUrl }, ctaSettings.buttonText))))));
};

var css_248z$3 = ":root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #3c3c3c;\n    --font-color: #fafafa; } }\n\n.card-root .card-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: none;\n  box-shadow: none;\n  text-align: center; }\n  .card-root .card-container .card-content {\n    padding: 10px; }\n  .card-root .card-container .card-actions {\n    justify-content: center;\n    padding-bottom: 20px; }\n  .card-root .card-container .card-links {\n    padding-left: 20px;\n    padding-right: 20px;\n    color: #fff;\n    background-color: #000; }\n";
styleInject(css_248z$3);

var Card = function (_a) {
    var image = _a.image, cardName = _a.cardName, description = _a.description, links = _a.links;
    return (React.createElement(Grid, { item: true, xs: 12, sm: true, className: "card-root", "data-testid": "Card" },
        React.createElement(Card$1, { className: "card-container" },
            React.createElement(CardContent, { className: "card-content" },
                image && (React.createElement(Image, __assign({}, image))),
                cardName && (React.createElement(Typography, { variant: "h2", component: "h2", style: { marginTop: 15, marginBottom: 15 } }, cardName)),
                description && (React.createElement(Typography, { component: "p" }, description))),
            React.createElement(CardActions, { className: "card-actions" }, links && links.map(function (link, i) {
                if (link.label) {
                    return (React.createElement(Button, { className: "card-links", href: link.value, key: i }, link.label));
                }
                else {
                    return null;
                }
            })))));
};

var CardList = function (_a) {
    var header = _a.header, cards = _a.cards;
    return (React.createElement(Box, { "data-testid": "CardList" },
        header && (React.createElement(Typography, { variant: "h2", component: "h2" }, header)),
        cards && (React.createElement(Grid, { container: true }, cards.map(function (card, index) {
            return React.createElement(Card, __assign({ key: Math.random().toString(36).substr(2, 9) }, card));
        })))));
};

function n(){return (n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);}return e}).apply(this,arguments)}var t=/[\'\"]/,r={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},a={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},c=["style","script"],o=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,i=/mailto:/i,l=/\n{2,}$/,u=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,s=/^ *> ?/gm,f=/^ {2,}\n/,p=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,d=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,m=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,g=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,h=/^(?:\n *)*\n/,y=/\r\n?/g,k=/^\[\^([^\]]+)](:.*)\n/,v=/^\[\^([^\]]+)]/,x=/\f/g,b=/^\s*?\[(x|\s)\]/,H=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,I=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,S=/&([a-z]+);/g,w=/^<!--[\s\S]*?(?:-->)/,M=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,O=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,E=/^\{.*\}$/,$=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,C=/^<([^ >]+@[^ >]+)>/,G=/^<([^ >]+:\/[^ >]+)>/,L=/ *\n+$/,T=/(?:^|\n)( *)$/,z=/-([a-z])?/gi,X=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,R=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,W=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,_=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,j=/^\[([^\]]*)\] ?\[([^\]]*)\]/,B=/(\[|\])/g,N=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,U=/\t/g,D=/^ *\| */,P=/(^ *\||\| *$)/g,Z=/ *$/,F=/^ *:-+: *$/,q=/^ *:-+ *$/,V=/^ *-+: *$/,K=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Q=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,J=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,Y=/^\\([^0-9A-Za-z\s])/,ee=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ne=/(^\n+|\n+$|\s+$)/g,te=/^([ \t]*)/,re=/\\([^0-9A-Z\s])/gi,ae=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ce=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),oe=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),ie="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",le=new RegExp("^\\[("+ie+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ue=new RegExp("^!\\[("+ie+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),se=[u,m,d,H,A,I,w,O,ce,oe,X,R];function fe(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function pe(e){return V.test(e)?"right":F.test(e)?"center":q.test(e)?"left":null}function de(e,n,t){var r=t.inTable;t.inTable=!0;var a=n(e.trim(),t);t.inTable=r;var c=[[]];return a.forEach(function(e,n){"tableSeparator"===e.type?0!==n&&n!==a.length-1&&c.push([]):("text"!==e.type||null!=a[n+1]&&"tableSeparator"!==a[n+1].type||(e.content=e.content.replace(Z,"")),c[c.length-1].push(e));}),c}function me(e,n,t){t.inline=!0;var r=de(e[1],n,t),a=e[2].replace(P,"").split("|").map(pe),c=function(e,n,t){return e.trim().split("\n").map(function(e){return de(e,n,t)})}(e[3],n,t);return t.inline=!1,{align:a,cells:c,header:r,type:"table"}}function ge(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function he(e){return function(n,t){return t.inline?e.exec(n):null}}function ye(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function ke(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function ve(e){return function(n){return e.exec(n)}}function xe(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function be(e){return e.replace(re,"$1")}function He(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!0,t.simple=!0;var c=e(n,t);return t.inline=r,t.simple=a,c}function Ae(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!1,t.simple=!0;var c=e(n,t);return t.inline=r,t.simple=a,c}function Ie(e,n,t){return t.inline=!1,e(n+"\n\n",t)}var Se,we=function(e,n,t){return {content:He(n,e[1],t)}};function Me(){return {}}function Oe(){return null}function Ee(){return [].slice.call(arguments).filter(Boolean).join(" ")}function $e(e,n,t){for(var r=e,a=n.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||t}function Ce(e,n){var t=$e(n,e);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:$e(n,e+".component",e):e}function Ge(P,Z){void 0===Z&&(Z={}),Z.overrides=Z.overrides||{},Z.slugify=Z.slugify||fe,Z.namedCodesToUnicode=Z.namedCodesToUnicode?n({},a,Z.namedCodesToUnicode):a;var F=Z.createElement||React.createElement;function q(e,t){var r=$e(Z.overrides,e+".props",{});return F.apply(void 0,[Ce(e,Z.overrides),n({},t,r,{className:Ee(null==t?void 0:t.className,r.className)||void 0})].concat([].slice.call(arguments,2)))}function V(n){var t=!1;Z.forceInline?t=!0:Z.forceBlock||(t=!1===N.test(n));var r=Te(Le(t?n:n.replace(ne,"")+"\n\n",{inline:t}));if(null===Z.wrapper)return r;var a,c=Z.wrapper||(t?"span":"div");if(r.length>1||Z.forceWrapper)a=r;else {if(1===r.length)return "string"==typeof(a=r[0])?q("span",{key:"outer"},a):a;a=null;}return React.createElement(c,{key:"outer"},a)}function re(n){var a=n.match(o);return a?a.reduce(function(n,a,c){var o=a.indexOf("=");if(-1!==o){var i=function(e){return -1!==e.indexOf("-")&&null===e.match(M)&&(e=e.replace(z,function(e,n){return n.toUpperCase()})),e}(a.slice(0,o)).trim(),l=function(e){return e?(t.test(e.charAt(0))&&(e=e.substr(1)),t.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(a.slice(o+1).trim()),u=r[i]||i,s=n[u]=function(e,n){return "style"===e?n.split(/;\s?/).reduce(function(e,n){var t=n.slice(0,n.indexOf(":"));return e[t.replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()})]=n.slice(t.length+1).trim(),e},{}):"href"===e?xe(n):(n.match(E)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(i,l);"string"==typeof s&&(I.test(s)||O.test(s))&&(n[u]=React.cloneElement(V(s.trim()),{key:c}));}else "style"!==a&&(n[r[a]||a]=!0);return n},{}):void 0}var ie=[],pe={},de={blockQuote:{match:ke(u),order:Se.HIGH,parse:function(e,n,t){return {content:n(e[0].replace(s,""),t)}},react:function(e,n,t){return q("blockquote",{key:t.key},n(e.content,t))}},breakLine:{match:ve(f),order:Se.HIGH,parse:Me,react:function(e,n,t){return q("br",{key:t.key})}},breakThematic:{match:ke(p),order:Se.HIGH,parse:Me,react:function(e,n,t){return q("hr",{key:t.key})}},codeBlock:{match:ke(m),order:Se.MAX,parse:function(e){return {content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,n,t){return q("pre",{key:t.key},q("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:ke(d),order:Se.MAX,parse:function(e){return {content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:ye(g),order:Se.LOW,parse:function(e){return {content:e[2]}},react:function(e,n,t){return q("code",{key:t.key},e.content)}},footnote:{match:ke(k),order:Se.MAX,parse:function(e){return ie.push({footnote:e[2],identifier:e[1]}),{}},react:Oe},footnoteReference:{match:he(v),order:Se.HIGH,parse:function(e){return {content:e[1],target:"#"+Z.slugify(e[1])}},react:function(e,n,t){return q("a",{key:t.key,href:xe(e.target)},q("sup",{key:t.key},e.content))}},gfmTask:{match:he(b),order:Se.HIGH,parse:function(e){return {completed:"x"===e[1].toLowerCase()}},react:function(e,n,t){return q("input",{checked:e.completed,key:t.key,readOnly:!0,type:"checkbox"})}},heading:{match:ke(H),order:Se.HIGH,parse:function(e,n,t){return {content:He(n,e[2],t),id:Z.slugify(e[2]),level:e[1].length}},react:function(e,n,t){return e.tag="h"+e.level,q(e.tag,{id:e.id,key:t.key},n(e.content,t))}},headingSetext:{match:ke(A),order:Se.MAX,parse:function(e,n,t){return {content:He(n,e[1],t),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:ve(w),order:Se.HIGH,parse:function(){return {}},react:Oe},image:{match:ye(ue),order:Se.HIGH,parse:function(e){return {alt:e[1],target:be(e[2]),title:e[3]}},react:function(e,n,t){return q("img",{key:t.key,alt:e.alt||void 0,title:e.title||void 0,src:xe(e.target)})}},link:{match:he(le),order:Se.LOW,parse:function(e,n,t){return {content:Ae(n,e[1],t),target:be(e[2]),title:e[3]}},react:function(e,n,t){return q("a",{key:t.key,href:xe(e.target),title:e.title},n(e.content,t))}},linkAngleBraceStyleDetector:{match:he(G),order:Se.MAX,parse:function(e){return {content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:function(e,n){return n.inAnchor?null:he($)(e,n)},order:Se.MAX,parse:function(e){return {content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:he(C),order:Se.MAX,parse:function(e){var n=e[1],t=e[1];return i.test(t)||(t="mailto:"+t),{content:[{content:n.replace("mailto:",""),type:"text"}],target:t,type:"link"}}},list:{match:function(e,n,t){var r=T.exec(t);return !r||!n._list&&n.inline?null:oe.exec(e=r[1]+e)},order:Se.HIGH,parse:function(e,n,t){var r=e[2],a=r.length>1,c=a?+r:void 0,o=e[0].replace(l,"\n").match(ce),i=!1;return {items:o.map(function(e,r){var a=ae.exec(e)[0].length,c=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(c,"").replace(ae,""),u=r===o.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var f,p=t.inline,d=t._list;t._list=!0,s?(t.inline=!1,f=l.replace(L,"\n\n")):(t.inline=!0,f=l.replace(L,""));var m=n(f,t);return t.inline=p,t._list=d,m}),ordered:a,start:c}},react:function(e,n,t){return q(e.ordered?"ol":"ul",{key:t.key,start:e.start},e.items.map(function(e,r){return q("li",{key:r},n(e,t))}))}},newlineCoalescer:{match:ke(h),order:Se.LOW,parse:Me,react:function(){return "\n"}},paragraph:{match:ke(R),order:Se.LOW,parse:we,react:function(e,n,t){return q("p",{key:t.key},n(e.content,t))}},ref:{match:he(W),order:Se.MAX,parse:function(e){return pe[e[1]]={target:e[2],title:e[4]},{}},react:Oe},refImage:{match:ye(_),order:Se.MAX,parse:function(e){return {alt:e[1]||void 0,ref:e[2]}},react:function(e,n,t){return q("img",{key:t.key,alt:e.alt,src:xe(pe[e.ref].target),title:pe[e.ref].title})}},refLink:{match:he(j),order:Se.MAX,parse:function(e,n,t){return {content:n(e[1],t),fallbackContent:n(e[0].replace(B,"\\$1"),t),ref:e[2]}},react:function(e,n,t){return pe[e.ref]?q("a",{key:t.key,href:xe(pe[e.ref].target),title:pe[e.ref].title},n(e.content,t)):q("span",{key:t.key},n(e.fallbackContent,t))}},table:{match:ke(X),order:Se.HIGH,parse:me,react:function(e,n,t){return q("table",{key:t.key},q("thead",null,q("tr",null,e.header.map(function(r,a){return q("th",{key:a,style:ge(e,a)},n(r,t))}))),q("tbody",null,e.cells.map(function(r,a){return q("tr",{key:a},r.map(function(r,a){return q("td",{key:a,style:ge(e,a)},n(r,t))}))})))}},tableSeparator:{match:function(e,n){return n.inTable?D.exec(e):null},order:Se.HIGH,parse:function(){return {type:"tableSeparator"}},react:function(){return " | "}},text:{match:ve(ee),order:Se.MIN,parse:function(e){return {content:e[0].replace(S,function(e,n){return Z.namedCodesToUnicode[n]?Z.namedCodesToUnicode[n]:e})}},react:function(e){return e.content}},textBolded:{match:ye(K),order:Se.MED,parse:function(e,n,t){return {content:n(e[2],t)}},react:function(e,n,t){return q("strong",{key:t.key},n(e.content,t))}},textEmphasized:{match:ye(Q),order:Se.LOW,parse:function(e,n,t){return {content:n(e[2],t)}},react:function(e,n,t){return q("em",{key:t.key},n(e.content,t))}},textEscaped:{match:ye(Y),order:Se.HIGH,parse:function(e){return {content:e[1],type:"text"}}},textStrikethroughed:{match:ye(J),order:Se.LOW,parse:we,react:function(e,n,t){return q("del",{key:t.key},n(e.content,t))}}};!0!==Z.disableParsingRawHTML&&(de.htmlBlock={match:ve(I),order:Se.HIGH,parse:function(e,n,t){var r,a=e[3].match(te),o=new RegExp("^"+a[1],"gm"),i=e[3].replace(o,""),l=(r=i,se.some(function(e){return e.test(r)})?Ie:He),u=e[1].toLowerCase(),s=-1!==c.indexOf(u);t.inAnchor=t.inAnchor||"a"===u;var f=s?e[3]:l(n,i,t);return t.inAnchor=!1,{attrs:re(e[2]),content:f,noInnerParse:s,tag:s?u:e[1]}},react:function(e,n,t){return q(e.tag,Object.assign({key:t.key},e.attrs),e.noInnerParse?e.content:n(e.content,t))}},de.htmlSelfClosing={match:ve(O),order:Se.HIGH,parse:function(e){return {attrs:re(e[2]||""),tag:e[1]}},react:function(e,n,t){return q(e.tag,Object.assign({},e.attrs,{key:t.key}))}});var Ge,Le=function(e){var n=Object.keys(e);function t(r,a){for(var c=[],o="";r;)for(var i=0;i<n.length;){var l=n[i],u=e[l],s=u.match(r,a,o);if(s){var f=s[0];r=r.substring(f.length);var p=u.parse(s,t,a);null==p.type&&(p.type=l),c.push(p),o=f;break}i++;}return c}return n.sort(function(n,t){var r=e[n].order,a=e[t].order;return r!==a?r-a:n<t?-1:1}),function(e,n){return t(function(e){return e.replace(y,"\n").replace(x,"").replace(U,"    ")}(e),n)}}(de),Te=(Ge=function(e){return function(n,t,r){return e[n.type].react(n,t,r)}}(de),function e(n,t){if(void 0===t&&(t={}),Array.isArray(n)){for(var r=t.key,a=[],c=!1,o=0;o<n.length;o++){t.key=o;var i=e(n[o],t),l="string"==typeof i;l&&c?a[a.length-1]+=i:a.push(i),c=l;}return t.key=r,a}return Ge(n,e,t)}),ze=V(P);return ie.length&&ze.props.children.push(q("footer",{key:"footer"},ie.map(function(e){return q("div",{id:Z.slugify(e.identifier),key:e.identifier},e.identifier,Te(Le(e.footnote,{inline:!0})))}))),ze}!function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN";}(Se||(Se={}));function ReactMarkdown(n){var t=n.children,r=n.options,a=function(e,n){if(null==e)return {};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n.indexOf(t=c[r])>=0||(a[t]=e[t]);return a}(n,["children","options"]);return React.cloneElement(Ge(t,r),a)}

var css_248z$2 = ":root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #3c3c3c;\n    --font-color: #fafafa; } }\n\n.amp-faq {\n  font-family: \"Avenir Next\", Helvetica, Arial, sans-serif;\n  color: #494949; }\n";
styleInject(css_248z$2);

// Generated with util/create-component.js
var FAQ = function (_a) {
    var _b = _a.header, header = _b === void 0 ? "FAQ" : _b, _c = _a.items, items = _c === void 0 ? [] : _c;
    var options = {
        overrides: {
            h1: { component: Typography, props: { variant: 'h1' } },
            h2: { component: Typography, props: { variant: 'h2' } },
            h3: { component: Typography, props: { variant: 'h3' } },
            h4: { component: Typography, props: { variant: 'h4' } },
            h5: { component: Typography, props: { variant: 'h5' } },
            h6: { component: Typography, props: { variant: 'h6' } },
            p: { component: Typography, props: { variant: 'body1', gutterBottom: true } },
            a: { component: Link },
            li: {
                component: function () { return (React.createElement("li", null,
                    React.createElement(Typography, { variant: "body1", component: "span" }))); }
            }
        }
    };
    return (React.createElement(Box, { "data-testid": "FAQ", className: "amp-faq" },
        React.createElement(Typography, { variant: "h3", component: "h3", align: "center" }, header),
        React.createElement(Box, { style: { marginTop: 30 } }, items && items.map(function (item, i) {
            return React.createElement(Box, { key: i },
                React.createElement(Accordion, null,
                    React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMore, null) },
                        React.createElement(Typography, { variant: "h4", component: "p" }, item.question)),
                    React.createElement(AccordionDetails, { className: "amp-faq" }, item.answer && React.createElement(ReactMarkdown, { options: options }, item.answer))));
        }))));
};

var css_248z$1 = ":root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #3c3c3c;\n    --font-color: #fafafa; } }\n\n.amp-text {\n  font-family: \"Avenir Next\", Helvetica, Arial, sans-serif;\n  color: #494949; }\n";
styleInject(css_248z$1);

var useStyles = makeStyles({
    root: {}
});
var Text = function (_a) {
    var text = _a.text, _b = _a.align, align = _b === void 0 ? 'left' : _b;
    useStyles();
    var options = {
        overrides: {
            h1: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h1', component: 'h1' } },
            h2: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h2', component: 'h2' } },
            h3: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h3', component: 'h3' } },
            h4: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h4', component: 'h4' } },
            h5: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h5', component: 'h5' } },
            h6: { component: Typography, props: { style: { marginTop: 20 }, gutterBottom: true, variant: 'h6', component: 'h6' } },
            p: { component: Typography, props: { variant: 'body1', component: 'p', gutterBottom: true } },
            a: { component: Link },
            table: { props: { style: { marginBottom: 30, width: "100%", borderSpacing: 0, borderCollapse: "collapse" } } },
            th: { props: { style: { padding: 11, border: "1px solid #ccc", backgroundColor: "#eee" } } },
            td: { props: { style: { padding: 11, border: "1px solid #ccc" } } },
            li: {
                component: function (props) { return (React.createElement("li", null,
                    React.createElement(Typography, __assign({}, props, { variant: "body1", component: "span" })))); }
            }
        }
    };
    return (React.createElement(Box, { "data-testid": "Text", className: "amp-text", style: { textAlign: align } }, text && React.createElement(ReactMarkdown, { options: options }, text)));
};

var css_248z = ":root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #3c3c3c;\n    --font-color: #fafafa; } }\n\n.inactive-video {\n  position: relative;\n  z-index: 100; }\n\n.inactive-video.no-overlay {\n  display: none; }\n\n.amp-dc-video-wrap {\n  position: relative;\n  margin: 0;\n  padding: 0; }\n\n.amp-dc-video-wrap .amp-dc-video {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  margin: 0 auto;\n  display: block;\n  width: 100%; }\n\n.amp-dc-video-wrap .pause-button {\n  cursor: pointer;\n  position: absolute;\n  z-index: 50;\n  top: 50%;\n  left: 50%;\n  width: 80px;\n  height: 80px;\n  margin-top: -40px;\n  margin-left: -40px;\n  -webkit-tap-highlight-color: transparent; }\n\n.amp-dc-video-wrap .pause-button:before {\n  content: '';\n  display: block;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  -webkit-box-shadow: inset 0 0 500px rgba(196, 215, 182, 0.5);\n  box-shadow: inset 0 0 500px rgba(196, 215, 182, 0.5);\n  position: absolute;\n  z-index: 100; }\n\n.amp-dc-video-wrap .pause-button:after {\n  content: '';\n  display: block;\n  border-left: 43px solid #3f433a;\n  border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent;\n  position: absolute;\n  border-radius: 6px;\n  z-index: 200;\n  margin-top: 15px;\n  margin-left: 24px; }\n\n.amp-dc-video-wrap .pause-button.inactive {\n  display: none; }\n";
styleInject(css_248z);

// Generated with util/create-component.js
var Video = function (_a) {
    var video = _a.video;
    if (!video) {
        return null;
    }
    return (React.createElement(Box, { "data-testid": "Video", className: 'amp-dc-video-wrap' },
        React.createElement("video", { className: "amp-dc-video", poster: "https://" + video.defaultHost + "/v/" + video.endpoint + "/" + video.name + "?protocol=https", controls: true, src: "https://" + video.defaultHost + "/v/" + video.endpoint + "/" + video.name + "/mp4_720p?protocol=https" },
            React.createElement("source", { src: "https://" + video.defaultHost + "/v/" + video.endpoint + "/" + video.name + "/mp4_720p?protocol=https", "data-res": "High", "data-bitrate": "2119", "data-label": "High", type: "video/mpeg4" }),
            React.createElement("source", { src: "https://" + video.defaultHost + "/v/" + video.endpoint + "/" + video.name + "/mp4_480p?protocol=https", "data-res": "Medium", "data-bitrate": "689", "data-label": "Medium", type: "video/mpeg4" }),
            React.createElement("source", { src: "https://" + video.defaultHost + "/v/" + video.endpoint + "/" + video.name + "/webm_480p?protocol=https", "data-res": "Medium", "data-bitrate": "624", "data-label": "Medium", type: "video/webm" })),
        React.createElement(Box, { className: "pause-button inactive" })));
};

export { Banner, Card, CardList, FAQ, Image, Text, Video };
//# sourceMappingURL=index.esm.js.map
