'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ANIMATION_END_EVENTS = exports.ANIMATION_END_EVENTS = ['webkitAnimationEnd', 'animationend', 'oAnimationEnd', 'MSAnimationEnd'];

var onAnimationEnd = exports.onAnimationEnd = function onAnimationEnd(el, callback) {
  ANIMATION_END_EVENTS.forEach(function (e) {
    return el.addEventListener(e, callback);
  });
};

var offAnimationEnd = exports.offAnimationEnd = function offAnimationEnd(el, callback) {
  ANIMATION_END_EVENTS.forEach(function (e) {
    return el.removeEventListener(e, callback);
  });
};