// ==UserScript==
// @name     Tweak CSS
// @version  1.2.2
// @grant    GM.getResourceUrl
// @match    *://www.ooblick.com/*
// @require  add-css.js
// @run-at   document-idle
// @resource css ooblick.css
// ==/UserScript==
css_url = await GM.getResourceUrl('css');
console.debug("css at", css_url);
/*
add_css(`body {
    background-color: yellow;
    color
}
`);
*/
