'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _panel = require('panel');

require('../registration.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var template = function render(locals) {
  locals = locals || {};var h = require('virtual-dom/h');return h("div", { "className": [].concat('mp-tooltip-wrapper').concat('mp-tooltip-hidden').filter(Boolean).join(' ') }, [h("div", { "className": [].concat('mp-tooltip-main').filter(Boolean).join(' ') }, [h("content")].filter(Boolean))].filter(Boolean));
};var css = 'a {   cursor: pointer;   text-decoration: none; } a, a:visited {   color: #3b99f0; } a:hover {   color: #4ba8ff; } .mp-font-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072; } .mp-font-subtitle {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 15px;   font-weight: 600;   line-height: 18px;   color: #4c6072; } .mp-font-list-item {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   line-height: 1.7;   color: #6e859d; } .mp-font-paragraph {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d; } * {   -webkit-font-smoothing: antialiased; } .mp-tooltip-wrapper.mp-tooltip-hidden {   pointer-events: none; } .mp-tooltip-wrapper.mp-tooltip-hidden .mp-tooltip-main {   display: none; } .mp-tooltip-wrapper .mp-tooltip-main {   -webkit-box-align: center;       -ms-flex-align: center;           align-items: center;   background-color: #4c6072;   border-radius: 3px;   color: #fff;   cursor: default;   display: -webkit-box;   display: -ms-flexbox;   display: flex;   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 12px;   font-weight: bold;   line-height: 9px;   -webkit-box-pack: center;       -ms-flex-pack: center;           justify-content: center;   padding: 8px;   pointer-events: auto;   position: absolute;   text-transform: initial; } .mp-tooltip-wrapper .mp-tooltip-main::after {   border: 5px solid transparent;   border-top-color: #4c6072;   content: "";   height: 0;   left: 50%;   margin-left: -5px;   position: absolute;   top: 100%;   width: 0; } ';

var MPTooltip = function (_Component) {
  _inherits(MPTooltip, _Component);

  function MPTooltip() {
    _classCallCheck(this, MPTooltip);

    return _possibleConstructorReturn(this, (MPTooltip.__proto__ || Object.getPrototypeOf(MPTooltip)).apply(this, arguments));
  }

  _createClass(MPTooltip, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      var _this2 = this;

      _get(MPTooltip.prototype.__proto__ || Object.getPrototypeOf(MPTooltip.prototype), 'attachedCallback', this).apply(this, arguments);
      var wrapper = this.el.querySelector('.mp-tooltip-wrapper');
      var tooltip = this.el.querySelector('.mp-tooltip-main');
      this.show = function () {
        wrapper.classList.remove('mp-tooltip-hidden');
        var leftPos = _this2.parentNode.offsetLeft + _this2.parentNode.offsetWidth / 2 - tooltip.offsetWidth / 2 + 'px';
        var topPos = _this2.parentNode.offsetTop - tooltip.offsetHeight - 8 + 'px';
        tooltip.style.left = leftPos;
        tooltip.style.top = topPos;
      };
      this.hide = function () {
        wrapper.classList.add('mp-tooltip-hidden');
      };
      this.stopPropagation = function (e) {
        e.stopPropagation();
      };
      this.parentNode.addEventListener('mouseover', this.show);
      this.parentNode.addEventListener('mouseleave', this.hide);
      this.el.addEventListener('click', this.stopPropagation);
      this.el.addEventListener('mousedown', this.stopPropagation);
    }
  }, {
    key: 'detachedCallback',
    value: function detachedCallback() {
      _get(MPTooltip.prototype.__proto__ || Object.getPrototypeOf(MPTooltip.prototype), 'detachedCallback', this).apply(this, arguments);
      this.parentNode.removeEventListener('mouseover', this.show);
      this.parentNode.removeEventListener('mouseover', this.hide);
      this.el.removeEventListener('click', this.stopPropagation);
      this.el.removeEventListener('mousedown', this.stopPropagation);
    }
  }, {
    key: 'config',
    get: function get() {
      return {
        css: css,
        template: template,
        useShadowDom: true
      };
    }
  }]);

  return MPTooltip;
}(_panel.Component);

if (window['mp-common-registered-components']['mp-tooltip'] !== true) {
  document.registerElement('mp-tooltip', MPTooltip);
  window['mp-common-registered-components']['mp-tooltip'] = true;
}