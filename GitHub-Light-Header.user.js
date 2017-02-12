// ==UserScript==
// @name        GitHub Light Header
// @namespace   https://github.com/ETHproductions/github-lite-header
// @description A Tampermonkey script to make GitHub light again
// @include     *://github.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    try {
        document.querySelector('.header').classList.remove('header-dark');
    } catch (e) { }
})();
