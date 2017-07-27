// ==UserScript==
// @name        GitHub Light Header
// @namespace   https://github.com/ETHproductions/github-lite-header
// @description A Tampermonkey script to make GitHub light again
// @include     *://github.com/*
// @version     1.1.1
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    try {
        var style = document.createElement("style"); 
        style.innerHTML = ".header{padding-top:10px!important;padding-bottom:10px!important;background-color:#f5f5f5!important;border-bottom:1px solid #e5e5e5!important}.header .header-logo-invertocat,.header .header-logo-wordmark{color:#333!important}.header .header-logo-invertocat .octicon-mark-github{width:28px!important;height:28px!important}.header .header-navlink{color:#333!important;font-size:13px!important;}.header .user-nav .header-nav-link{height:auto!important}.header .header-nav-link:focus,.header .header-nav-link:hover{color:#4078c0!important}.header .header-nav-link:focus .dropdown-caret,.header .header-nav-link:hover .dropdown-caret{border-top-color:#4078c0!important}.header .notification-indicator .mail-status{border-color:#f3f3f3!important}.header .header-search{width:360px!important}.header .header-search-wrapper{background-color:#fff!important;border:1px solid #ddd!important;box-shadow:inset 0 1px 2px rgba(0,0,0,.075)!important;font-size:13px!important;color:#333!important;min-height:0!important}.header .header-search-wrapper.focus{border-color:#51a7e8!important;outline:0!important;box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(81,167,232,.5)!important}.header .header-search-scope{font-size:12px!important;line-height:20px!important;color:#767676!important;border-right:1px solid #eee!important}.header .scoped-search .form-control.focus .header-search-scope{color:#4078c0!important;background-color:#edf2f9!important;border-color:#c6d7ec!important}.header .header-search-input{min-height:26px!important;font-size:13px!important;color:#333!important}.header .header-search-input::-webkit-input-placeholder{color:inherit!important}.header .header-search-input::-moz-placeholder{color:inherit!important}.header .header-search-input:-ms-input-placeholder{color:inherit!important}.header .header-search-input::placeholder{color:inherit!important}"; // Taken from https://github.com/alxhotel/original-github-bar
        document.getElementsByTagName("head")[0].appendChild(style);
    } catch (e) { }
})();
