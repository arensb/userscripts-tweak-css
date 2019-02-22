// ==UserScript==
// @name     Tweak CSS
// @version  1.2.3
// @grant    none
// @match    *://www.ooblick.com/*
// @require  add-css.js
// @run-at   document-idle
// ==/UserScript==
var fg = "red";
var bg = "yellow"

add_css(
`body {
    background-color: ${bg};
    color:	${fg};
}
`);
