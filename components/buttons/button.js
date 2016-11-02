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
  locals = locals || {};;;var result_of_with = function ($component, $helpers, document) {
    var h = require('virtual-dom/h');function generateLiteralWidget(id, contents) {
      function LiteralWidget(id, contents) {
        this.name = 'LiteralWidget';this.id = id;this.contents = contents;
      }LiteralWidget.prototype.type = 'Widget';
      LiteralWidget.prototype.init = function () {
        var wrapper = document.createElement('div');wrapper.innerHTML = this.contents;var root;if (wrapper.childNodes.length === 1) {
          root = wrapper.firstChild;
        } else {
          root = wrapper;
        }return root;
      };
      LiteralWidget.prototype.update = function (previous, domNode) {
        return domNode;
      }; // 'render' is called by the vdom-to-html module which is used in the unit tests
      LiteralWidget.prototype.render = function () {
        var h = require('virtual-dom/h');var host = document.createElement('div');host.appendChild(this.init());return h('text', host.innerHTML);
      };return new LiteralWidget(id, contents);
    };return { value: h("div", { "attributes": $helpers.getButtonAttrs(), "className": [].concat('mp-button-container ' + $component.className + '').filter(Boolean).join(' ') }, [h("div", { "className": [].concat('mp-button-text').filter(Boolean).join(' ') }, function () {
        var __jade_nodes = [];__jade_nodes = __jade_nodes.concat(h("content"));__jade_nodes = __jade_nodes.concat($component.isAttributeEnabled('arrow-next') ? h("div", { "className": [].concat('mp-button-arrow-next').filter(Boolean).join(' ') }, [generateLiteralWidget(0, '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 14 10.5" style="enable-background:new 0 0 14 10.5;" xml:space="preserve"><style type="text/css">	.st0{fill:#D8E0E7;}</style><path class="st0" d="M13,6.2H1c-0.5,0-1-0.4-1-1v0c0-0.5,0.4-1,1-1h12c0.5,0,1,0.4,1,1v0C14,5.8,13.6,6.2,13,6.2z"/><path class="st0" d="M12.3,5.9L8.1,1.7c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0l4.2,4.2c0.4,0.4,0.4,1,0,1.4l0,0	C13.3,6.3,12.7,6.3,12.3,5.9z"/><path class="st0" d="M12.3,4.5L8.1,8.8c-0.4,0.4-0.4,1,0,1.4l0,0c0.4,0.4,1,0.4,1.4,0l4.2-4.2c0.4-0.4,0.4-1,0-1.4l0,0	C13.3,4.1,12.7,4.1,12.3,4.5z"/></svg>')].filter(Boolean)) : undefined);;return __jade_nodes;
      }.call(this).filter(Boolean))].filter(Boolean)) };
  }.call(this, "$component" in locals ? locals.$component : typeof $component !== "undefined" ? $component : undefined, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "document" in locals ? locals.document : typeof document !== "undefined" ? document : undefined);if (result_of_with) return result_of_with.value;
};var css = 'a {   cursor: pointer;   text-decoration: none; } a, a:visited {   color: #3b99f0; } a:hover {   color: #4ba8ff; } .mp-font-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072; } .mp-font-subtitle {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 15px;   font-weight: 600;   line-height: 18px;   color: #4c6072; } .mp-font-list-item {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   line-height: 1.7;   color: #6e859d; } .mp-font-paragraph {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d; } * {   -webkit-font-smoothing: antialiased; } .mp-button-container {   -webkit-box-align: center;       -ms-flex-align: center;           align-items: center;   border-radius: 4px;   box-sizing: border-box;   cursor: pointer;   display: -webkit-inline-box;   display: -ms-inline-flexbox;   display: inline-flex;   -webkit-box-flex: 1;       -ms-flex: 1;           flex: 1;   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   font-weight: 700;   -webkit-box-pack: center;       -ms-flex-pack: center;           justify-content: center;   line-height: 15px;   padding: 12px 25px;   text-align: center;   text-transform: uppercase; /* BEGIN COLOR THEMES */ /* END COLOR THEMES */ /* BEGIN SPECIAL STYLES FOR MODAL BUTTONS */ /* END SPECIAL STYLES FOR MODAL BUTTONS */ } .mp-button-container .mp-button-text {   display: -webkit-inline-box;   display: -ms-inline-flexbox;   display: inline-flex;   -webkit-box-align: center;       -ms-flex-align: center;           align-items: center;   -webkit-box-pack: center;       -ms-flex-pack: center;           justify-content: center; } .mp-button-container .mp-button-text .mp-button-arrow-next {   margin-left: 10px;   width: 15px; } .mp-button-container .mp-button-text .mp-button-arrow-next svg path {   fill: #fff; } .mp-button-container:disabled, .mp-button-container[disabled] {   cursor: default; } .mp-button-container:disabled .mp-button-text, .mp-button-container[disabled] .mp-button-text {   opacity: 0.6; } .mp-button-container.mp-button-primary, .mp-button-container.mp-button-blue {   background: #4ba8ff -webkit-linear-gradient(top, #50aeff, #46a2ff);   background: #4ba8ff linear-gradient(to bottom, #50aeff, #46a2ff);   border: 1px solid #3391e9;   box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.2);   color: #fff; } .mp-button-container.mp-button-primary:hover:not([disabled]):not(:disabled), .mp-button-container.mp-button-blue:hover:not([disabled]):not(:disabled) {   background-image: -webkit-linear-gradient(bottom, #2f95fd, #4aabfe), -webkit-linear-gradient(#6e859d, #6e859d);   background-image: linear-gradient(to top, #2f95fd, #4aabfe), linear-gradient(#6e859d, #6e859d);   box-shadow: 0 1px 1px 0 rgba(0,0,0,0.13); } .mp-button-container.mp-button-primary:active:not([disabled]):not(:disabled), .mp-button-container.mp-button-blue:active:not([disabled]):not(:disabled) {   background-image: -webkit-linear-gradient(bottom, #2f95fd, #4aabfe), -webkit-linear-gradient(#50aaff, #50aaff);   background-image: linear-gradient(to top, #2f95fd, #4aabfe), linear-gradient(#50aaff, #50aaff);   box-shadow: inset 0 1px 1px 0 rgba(0,0,0,0.31);   color: rgba(255,255,255,0.6); } .mp-button-container.mp-button-primary.mp-button-on-blue, .mp-button-container.mp-button-blue.mp-button-on-blue {   background: #4ba8ff -webkit-linear-gradient(top, #7fc1ff, #6fb9ff);   background: #4ba8ff linear-gradient(to bottom, #7fc1ff, #6fb9ff);   box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.06); } .mp-button-container.mp-button-primary.mp-button-on-blue:hover:not([disabled]):not(:disabled), .mp-button-container.mp-button-blue.mp-button-on-blue:hover:not([disabled]):not(:disabled) {   background-image: -webkit-linear-gradient(top, #89c5ff, #68b5ff), -webkit-linear-gradient(#80c1ff, #80c1ff);   background-image: linear-gradient(to bottom, #89c5ff, #68b5ff), linear-gradient(#80c1ff, #80c1ff);   border: solid 1px #1d85e7; } .mp-button-container.mp-button-primary.mp-button-on-blue:active:not([disabled]):not(:disabled), .mp-button-container.mp-button-blue.mp-button-on-blue:active:not([disabled]):not(:disabled) {   background-image: -webkit-linear-gradient(top, #89c5ff, #68b5ff), -webkit-linear-gradient(#8bc7ff, #8bc7ff);   background-image: linear-gradient(to bottom, #89c5ff, #68b5ff), linear-gradient(#8bc7ff, #8bc7ff);   border: solid 1px #1d85e7;   box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2); } .mp-button-container.mp-button-secondary, .mp-button-container.mp-button-grey {   background-color: #fff;   border: 1px solid #d8e0e7;   box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05), inset 0px 0px 0px 2px rgba(255,255,255,0.17);   color: #6e859d; } .mp-button-container.mp-button-secondary:hover, .mp-button-container.mp-button-grey:hover {   border: 1px solid #c1ccd6;   box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1), inset 0px 0px 0px 2px rgba(255,255,255,0.17); } .mp-button-container.mp-button-secondary:active, .mp-button-container.mp-button-grey:active {   border-color: #c1ccd6;   box-shadow: 0 1px 0 0 #e3eaf0, inset 0 2px 3px 0 #dfe5eb; } .mp-button-container.mp-button-secondary.mp-button-on-blue, .mp-button-container.mp-button-grey.mp-button-on-blue {   background-color: #4ba8ff;   border-color: #3391e9;   box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.06);   color: #fff; } .mp-button-container.mp-button-secondary.mp-button-on-blue:hover, .mp-button-container.mp-button-grey.mp-button-on-blue:hover {   border-color: #2788e3; } .mp-button-container.mp-button-secondary.mp-button-on-blue:active, .mp-button-container.mp-button-grey.mp-button-on-blue:active {   border-color: #2583dd;   box-shadow: 0 1px 1px 0 rgba(0,0,0,0.06), inset 0 1px 2px 0 rgba(0,0,0,0.2); } .mp-button-container.mp-button-red {   background: #e4567b -webkit-linear-gradient(#ea8499, #e4687d);   background: #e4567b linear-gradient(#ea8499, #e4687d);   border: 1px solid #ff5400;   border-image-source: linear-gradient(to top, #d15269, #e46d83);   border-image-slice: 1;   color: #fff; } .mp-button-container.mp-button-red:hover:not([disabled]):not(:disabled) {   background: #e4567b -webkit-linear-gradient(top, #ed92a4, #ea8499);   background: #e4567b linear-gradient(to bottom, #ed92a4, #ea8499); } .mp-button-container.mp-button-purple {   background: #9271e2;   border: 1px solid #7858b8;   color: #fff; } .mp-button-container.mp-button-purple:hover:not([disabled]):not(:disabled) {   background: #a081ea;   border: 1px solid #9270e2; } .mp-button-container.mp-button-modal {   background-image: none;   border-radius: 0 0 6px 6px;   border: none;   color: #fff;   font-size: 15px;   font-weight: bold;   height: 60px;   letter-spacing: 0.7px;   padding: 0;   display: -webkit-box;   display: -ms-flexbox;   display: flex;   text-transform: none;   -webkit-transition: background 200ms;   transition: background 200ms; } .mp-button-container.mp-button-modal:hover:not([disabled]):not(:disabled) {   border: none; } .mp-button-container.mp-button-modal.mp-button-primary, .mp-button-container.mp-button-modal.mp-button-blue {   background: #4ba8ff;   box-shadow: inset 0 1px 0 0 #3b99f0; } .mp-button-container.mp-button-modal.mp-button-primary:hover:not([disabled]):not(:disabled), .mp-button-container.mp-button-modal.mp-button-blue:hover:not([disabled]):not(:disabled) {   background: #6cb8ff; } .mp-button-container.mp-button-modal.mp-button-purple {   box-shadow: inset 0 1px 0 0 #7858b8; } ';

var MPButton = function (_Component) {
  _inherits(MPButton, _Component);

  function MPButton() {
    _classCallCheck(this, MPButton);

    return _possibleConstructorReturn(this, (MPButton.__proto__ || Object.getPrototypeOf(MPButton)).apply(this, arguments));
  }

  _createClass(MPButton, [{
    key: 'attachedCallback',
    value: function attachedCallback() {
      var _this2 = this;

      _get(MPButton.prototype.__proto__ || Object.getPrototypeOf(MPButton.prototype), 'attachedCallback', this).apply(this, arguments);
      this._clickHandler = function (e) {
        if (_this2.isAttributeEnabled('disabled')) {
          e.stopImmediatePropagation();
        }
      };
      this.el.addEventListener('click', this._clickHandler);
    }
  }, {
    key: 'detachedCallback',
    value: function detachedCallback() {
      _get(MPButton.prototype.__proto__ || Object.getPrototypeOf(MPButton.prototype), 'detachedCallback', this).apply(this, arguments);
      this.el.removeEventListener('click', this._clickHandler);
      this._clickHandler = null;
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attr, oldVal, newVal) {
      _get(MPButton.prototype.__proto__ || Object.getPrototypeOf(MPButton.prototype), 'attributeChangedCallback', this).apply(this, arguments);
      // handle boolean attributes a bit better than HTML does by default: https://www.w3.org/TR/html5/infrastructure.html#boolean-attribute
      // if it's set to "false" just remove the attribute
      if (newVal === 'false') {
        this.removeAttribute(attr);
      }
    }
  }, {
    key: 'config',
    get: function get() {
      var _this3 = this;

      return {
        css: css,
        helpers: {
          getButtonAttrs: function getButtonAttrs() {
            var attrs = {};
            if (_this3.isAttributeEnabled('disabled')) {
              attrs.disabled = true;
            }
            return attrs;
          }
        }, template: template,
        useShadowDom: true
      };
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.getAttribute('disabled');
    },
    set: function set(disabled) {
      this.setAttribute('disabled', disabled);
    }
  }]);

  return MPButton;
}(_panel.Component);

if (window['mp-common-registered-components']['mp-button'] !== true) {
  document.registerElement('mp-button', MPButton);
  window['mp-common-registered-components']['mp-button'] = true;
}