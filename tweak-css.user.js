// ==UserScript==
// @name     Tweak CSS
// @version  1.3.0
// @match    *://www.example.com/
// @grant    none
// @require  add-css.js
// @run-at   document-idle
// ==/UserScript==

// Colors:
// Define the color palette we'll be using. These are just variables to
// make it easier to repeat colors.
// These colors are from http://paletton.com/#uid=53U0m0kitPxdtXDgdUkkdIKln-9
var primary_1    = "#7180e2";
var secondary1_1 = "#8a6fe3";
var secondary2_1 = "#67a6df";

// Define which areas of the page should have which colors.
// The key is a CSS selector, which can be an ID, a class, etc.
// The value is a two-valued array, with the foreground and background
// color.
// Can use either CSS color strings, or the variables, above.
set_colors({
    "body":	["black", primary_1],
    ".navbox":	["black", secondary1_1],
});
