// ==UserScript==
// @name         全站灵堂
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  为某些人定制的全站灵堂脚本
// @license      MIT。
// @author       https://greasyfork.org/users/574395-frammolz-amanda
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    var filter = document.createElement('style');
    filter.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(filter);
    filter.appendChild(document.createTextNode("*{-webkit-filter:grayscale(100%);!important;}"));
})();
