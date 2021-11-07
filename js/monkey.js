// ==UserScript==
// @name         Youtube Tools
// @version      0.202110.1
// @description  Youtube Tools script injection
// @author       Drew Anderson
// @icon         https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png
// @homepageURL  https://www.drewanderson.org/youtube-playlists/
// @downloadURL  https://www.drewanderson.org/youtube-playlists/js/monkey.js
// @supportURL   https://github.com/drewandersonnz/youtube-playlists/
// @namespace    https://youtube.com/
// @include      /https?:\/\/youtube\.com/watch.*/
// @include      /https?:\/\/www\.youtube\.com/watch.*/
// ==/UserScript==

var src = "https://www.drewanderson.org/youtube-playlists/js/tools.202110.js";
//src = "http://127.0.0.1:8080/js/tools.202110.js";

var script   = document.createElement("script");
script.type  = "text/javascript";
script.src   = src    // use this for linked script

var head = document.head || document.getElementsByTagName('head')[0];
head.insertBefore(script, head.lastChild);
