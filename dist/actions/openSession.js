"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openSession = openSession;
function openSession(urls) {
  urls.forEach(function (url, i) {
    chrome.tabs.create({
      url: url,
      active: i === urls.length - 1 ? true : false
    });
  });
}