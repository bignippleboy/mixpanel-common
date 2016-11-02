'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _panel = require('panel');

require('../registration.js');

var _utils = require('../utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var template = function render(locals) {
  locals = locals || {};;;var result_of_with = function ($component, $helpers, Object, alertIcon, document, visibility) {
    var h = require('virtual-dom/h');function generateLiteralWidget(id, contents) {
      function LiteralWidget(id, contents) {
        this.name = 'LiteralWidget';this.id = id;this.contents = contents;
      }
      LiteralWidget.prototype.type = 'Widget';LiteralWidget.prototype.init = function () {
        var wrapper = document.createElement('div');wrapper.innerHTML = this.contents;var root;if (wrapper.childNodes.length === 1) {
          root = wrapper.firstChild;
        } else {
          root = wrapper;
        }
        return root;
      };LiteralWidget.prototype.update = function (previous, domNode) {
        return domNode;
      }; // 'render' is called by the vdom-to-html module which is used in the unit tests
      LiteralWidget.prototype.render = function () {

        var h = require('virtual-dom/h');var host = document.createElement('div');host.appendChild(this.init());return h('text', host.innerHTML);
      };return new LiteralWidget(id, contents);
    };var __objToAttrs = function __objToAttrs(o) {
      return Object.keys(o).map(function (k) {
        return o[k] ? k : false;
      });
    };
    return { value: h("div", { "className": [].concat('mp-modal-stage').concat(__objToAttrs({ 'mp-modal-alert': $component.isAttributeEnabled('alert'), 'mp-modal-absolute': $component.isAttributeEnabled('not-fullscreen'), 'mp-modal-closed': visibility === 'closed' })).filter(Boolean).join(' ') }, function () {
        var __jade_nodes = [];__jade_nodes = __jade_nodes.concat($helpers.getType() === 'modal' ? h("div", { "onclick": $helpers.backdropClicked, "className": [].concat('mp-modal-backdrop').concat('mp-modal-' + visibility + '').filter(Boolean).join(' ') }) : undefined);__jade_nodes = __jade_nodes.concat(h("div", { "className": [].concat('mp-modal-wrapper').filter(Boolean).join(' ') }, [h("div", { "style": $helpers.getModalStyles(), "className": [].concat('mp-modal-main').concat('mp-modal-' + visibility + '').filter(Boolean).join(' ') }, function () {
          var __jade_nodes = [];__jade_nodes = __jade_nodes.concat($component.isAttributeEnabled('closeable') ? h("div", { "onclick": $helpers.closeClicked, "className": [].concat('mp-modal-close-btn').filter(Boolean).join(' ') }, [h("div", { "className": [].concat('mp-modal-close-icon').filter(Boolean).join(' ') }, [generateLiteralWidget(1, '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 10.6 10.5" style="enable-background:new 0 0 10.6 10.5;" xml:space="preserve"><style type="text/css">	.x{fill-rule:evenodd;clip-rule:evenodd;fill:#D8E0E7;}</style><path class="x" d="M8.6,0L5.3,3.3L2,0L0,2l3.3,3.3L0,8.5l2,2l3.2-3.2l3.2,3.2l2-2L7.3,5.3L10.6,2L8.6,0z"/></svg>')].filter(Boolean))].filter(Boolean)) : undefined);__jade_nodes = __jade_nodes.concat(h("div", { "className": [].concat('mp-modal-top-container').concat(__objToAttrs({ 'mp-modal-alert': $component.isAttributeEnabled('alert') })).filter(Boolean).join(' ') }, function () {
            var __jade_nodes = [];__jade_nodes = __jade_nodes.concat($component.isAttributeEnabled('alert') ? h("div", { "className": [].concat('mp-modal-content-row').filter(Boolean).join(' ') }, [h("div", { "className": [].concat('mp-modal-alert-icon').filter(Boolean).join(' ') }, [generateLiteralWidget(2, '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 33 30" style="enable-background:new 0 0 33 30;" xml:space="preserve"><style type="text/css">	.mp-modal-alert-icon-fill{fill:#D8E0E7;}</style><path class="mp-modal-alert-icon-fill" d="M32.2,24L20,2.5c-1.9-3.3-5-3.3-6.9,0L0.8,23.6C-1.1,26.9,0.5,30,4.2,30h24.5C32.5,30,34.1,27.3,32.2,24z	 M16.6,26c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2.1,0.9,2.1,2.1C18.7,25.1,17.8,26,16.6,26z M18.1,20.4h-3l-1-12.3h5	L18.1,20.4z"/></svg>')].filter(Boolean)), h("content", { "select": '[slot-body]' })].filter(Boolean)) : h("content", { "select": '[slot-body]' }));;return __jade_nodes;
          }.call(this).filter(Boolean)));__jade_nodes = __jade_nodes.concat(!alertIcon ? h("div", { "className": [].concat('mp-modal-button-container').filter(Boolean).join(' ') }, [h("content", { "select": '[slot-button]' })].filter(Boolean)) : undefined);;return __jade_nodes;
        }.call(this).filter(Boolean))].filter(Boolean)));;return __jade_nodes;
      }.call(this).filter(Boolean)) };
  }.call(this, "$component" in locals ? locals.$component : typeof $component !== "undefined" ? $component : undefined, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "Object" in locals ? locals.Object : typeof Object !== "undefined" ? Object : undefined, "alertIcon" in locals ? locals.alertIcon : typeof alertIcon !== "undefined" ? alertIcon : undefined, "document" in locals ? locals.document : typeof document !== "undefined" ? document : undefined, "visibility" in locals ? locals.visibility : typeof visibility !== "undefined" ? visibility : undefined);if (result_of_with) return result_of_with.value;
};var css = 'a {   cursor: pointer;   text-decoration: none; } a, a:visited {   color: #3b99f0; } a:hover {   color: #4ba8ff; } .mp-font-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072; } .mp-font-subtitle {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 15px;   font-weight: 600;   line-height: 18px;   color: #4c6072; } .mp-font-list-item {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 13px;   line-height: 1.7;   color: #6e859d; } .mp-font-paragraph {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d; } * {   -webkit-font-smoothing: antialiased; } .mp-modal-stage {   bottom: 0;   box-sizing: border-box;   left: 0;   pointer-events: none;   position: fixed;   right: 0;   top: 0;   z-index: 10; } .mp-modal-stage.mp-modal-closed {   display: none; } .mp-modal-stage.mp-modal-absolute, .mp-modal-stage.mp-modal-absolute .mp-modal-backdrop, .mp-modal-stage.mp-modal-absolute .mp-modal-wrapper {   position: absolute; } .mp-modal-stage .mp-modal-backdrop {   background: #45566d;   height: 100%;   position: fixed;   pointer-events: auto;   width: 100%;   z-index: 1; } .mp-modal-stage .mp-modal-backdrop.mp-modal-opening {   -webkit-animation: fadeOverlayIn 300ms forwards;           animation: fadeOverlayIn 300ms forwards;   opacity: 0; } .mp-modal-stage .mp-modal-backdrop.mp-modal-open {   opacity: 0.9; } .mp-modal-stage .mp-modal-backdrop.mp-modal-closing {   -webkit-animation: fadeOverlayOut 300ms forwards;           animation: fadeOverlayOut 300ms forwards; } .mp-modal-stage .mp-modal-backdrop.mp-modal-closed {   opacity: 0; } .mp-modal-stage .mp-modal-wrapper {   display: -webkit-box;   display: -ms-flexbox;   display: flex;   height: 100%;   -webkit-box-pack: center;       -ms-flex-pack: center;           justify-content: center;   -webkit-box-align: center;       -ms-flex-align: center;           align-items: center;   pointer-events: none;   position: fixed;   width: 100%;   z-index: 2; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main {   border-radius: 6px;   box-shadow: 0 1px 3px 0 rgba(1,1,1,0.28);   max-width: 530px;   pointer-events: auto;   position: relative;   z-index: 2; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main.mp-modal-opening {   -webkit-animation: fadeModalIn 300ms forwards 100ms;           animation: fadeModalIn 300ms forwards 100ms;   opacity: 0; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main.mp-modal-open {   opacity: 1; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main.mp-modal-closing {   -webkit-animation: fadeModalOut 200ms forwards;           animation: fadeModalOut 200ms forwards; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main.mp-modal-closed {   opacity: 0; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main .mp-modal-close-btn {   cursor: pointer;   float: right;   height: 10px;   position: absolute;   right: 15px;   top: 15px; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main .mp-modal-close-btn .mp-modal-close-icon svg {   width: 10px; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main .mp-modal-close-btn .mp-modal-close-icon svg path {   fill: #d8e0e7; } .mp-modal-stage .mp-modal-wrapper .mp-modal-main .mp-modal-close-btn:hover .mp-modal-close-icon svg path {   fill: #c1ccd6; } .mp-modal-stage .mp-modal-top-container {   background: #fff;   border-radius: 6px 6px 0 0;   padding: 30px 60px;   text-align: center; } .mp-modal-stage .mp-modal-top-container.mp-modal-alert {   border-radius: 6px;   padding: 20px 40px 30px; } .mp-modal-stage .mp-modal-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072;   font-weight: 600; } .mp-modal-stage .mp-modal-subtitle {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d;   color: #6e859d;   margin: 12px 0; } .mp-modal-stage .mp-modal-alert-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072;   text-align: left; } .mp-modal-stage .mp-modal-alert-subtitle {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d;   font-weight: normal;   text-align: left;   white-space: pre-wrap; } .mp-modal-stage content::content .mp-modal-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072;   font-weight: 600; } .mp-modal-stage content::content .mp-modal-subtitle {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d;   color: #6e859d;   margin: 12px 0; } .mp-modal-stage content::content .mp-modal-alert-title {   font-family: \'Proxima Nova\', \'proxima-nova\', sans-serif;   font-size: 18px;   font-weight: 700;   line-height: 1.4;   color: #4c6072;   text-align: left; } .mp-modal-stage content::content .mp-modal-alert-subtitle {   font-family: \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif;   font-size: 14px;   font-weight: normal;   line-height: 18px;   color: #6e859d;   font-weight: normal;   text-align: left;   white-space: pre-wrap; } .mp-modal-stage .mp-modal-content-row {   -webkit-box-align: start;       -ms-flex-align: start;           align-items: flex-start;   display: -webkit-box;   display: -ms-flexbox;   display: flex;   white-space: nowrap;   width: 340px; } .mp-modal-stage .mp-modal-content-row .mp-modal-alert-icon {   height: 30px;   margin-top: 10px;   margin-right: 15px;   white-space: normal;   width: 33px; } .mp-modal-stage .mp-modal-content-row .mp-modal-alert-icon svg {   height: 29px; } .mp-modal-stage .mp-modal-content-row .mp-modal-alert-icon svg .mp-modal-alert-icon-fill {   fill: #e4567b; } @-webkit-keyframes fadeOverlayIn {   from {     opacity: 0;   }   to {     opacity: 0.9;   } } @keyframes fadeOverlayIn {   from {     opacity: 0;   }   to {     opacity: 0.9;   } } @-webkit-keyframes fadeOverlayOut {   from {     opacity: 0.9;   }   to {     opacity: 0;   } } @keyframes fadeOverlayOut {   from {     opacity: 0.9;   }   to {     opacity: 0;   } } @-webkit-keyframes fadeModalIn {   from {     -webkit-transform: scale(1.1, 1.1);             transform: scale(1.1, 1.1);     opacity: 0;   }   to {     -webkit-transform: scale(1, 1);             transform: scale(1, 1);     opacity: 1;   } } @keyframes fadeModalIn {   from {     -webkit-transform: scale(1.1, 1.1);             transform: scale(1.1, 1.1);     opacity: 0;   }   to {     -webkit-transform: scale(1, 1);             transform: scale(1, 1);     opacity: 1;   } } @-webkit-keyframes fadeModalOut {   from {     -webkit-transform: scale(1, 1);             transform: scale(1, 1);     opacity: 1;   }   to {     -webkit-transform: scale(1.1, 1.1);             transform: scale(1.1, 1.1);     opacity: 0;   } } @keyframes fadeModalOut {   from {     -webkit-transform: scale(1, 1);             transform: scale(1, 1);     opacity: 1;   }   to {     -webkit-transform: scale(1.1, 1.1);             transform: scale(1.1, 1.1);     opacity: 0;   } } ';


var VISIBILITY_OPEN = 'open';
var VISIBILITY_OPENING = 'opening';
var VISIBILITY_CLOSED = 'closed';
var VISIBILITY_CLOSING = 'closing';

var MPModal = function (_Component) {
  _inherits(MPModal, _Component);

  function MPModal() {
    _classCallCheck(this, MPModal);

    return _possibleConstructorReturn(this, (MPModal.__proto__ || Object.getPrototypeOf(MPModal)).apply(this, arguments));
  }

  _createClass(MPModal, [{
    key: 'close',
    value: function close() {
      switch (this.state.visibility) {
        case VISIBILITY_CLOSED:
        case VISIBILITY_CLOSING:
          break;
        case VISIBILITY_OPENING:
          this.update({ visibility: VISIBILITY_CLOSED });
          break;
        case VISIBILITY_OPEN:
          this._pendingAnimations = ['fadeModalOut'];
          if (this.config.helpers.getType() === 'modal') {
            this._pendingAnimations.push('fadeOverlayOut');
          }
          this.update({ visibility: VISIBILITY_CLOSING });
          break;
      }
    }
  }, {
    key: 'open',
    value: function open() {
      switch (this.state.visibility) {
        case VISIBILITY_OPEN:
        case VISIBILITY_OPENING:
          break;
        case VISIBILITY_CLOSING:
          this.update({ visibility: VISIBILITY_OPEN });
          break;
        case VISIBILITY_CLOSED:
          this._pendingAnimations = ['fadeModalIn'];
          if (this.config.helpers.getType() === 'modal') {
            this._pendingAnimations.push('fadeOverlayIn');
          }
          this.update({ visibility: VISIBILITY_OPENING });
          break;
      }
    }
  }, {
    key: 'attachedCallback',
    value: function attachedCallback() {
      var _this2 = this;

      _get(MPModal.prototype.__proto__ || Object.getPrototypeOf(MPModal.prototype), 'attachedCallback', this).apply(this, arguments);

      // listen for escape keypress
      this.maybeCloseOnEscape = function (e) {
        if (_this2.isAttributeEnabled('closeable') && e.keyCode === 27) {
          _this2.close();
        }
      };
      document.body.addEventListener('keydown', this.maybeCloseOnEscape);

      // transition between states after animations complete
      this._onAnimationEnd = function (e) {
        if (_this2._pendingAnimations.length === 0) {
          return;
        }
        _this2._pendingAnimations = _this2._pendingAnimations.filter(function (anim) {
          return anim !== e.animationName;
        });
        if (_this2._pendingAnimations.length > 0) {
          return;
        }
        switch (_this2.state.visibility) {
          case VISIBILITY_OPENING:
            _this2.update({ visibility: VISIBILITY_OPEN });
            _this2.dispatchEvent(new CustomEvent('change', { detail: { state: VISIBILITY_OPEN } }));
            break;
          case VISIBILITY_CLOSING:
            _this2.update({ visibility: VISIBILITY_CLOSED });
            _this2.dispatchEvent(new CustomEvent('change', { detail: { state: VISIBILITY_CLOSED } }));
            break;
        }
      };
      (0, _utils.onAnimationEnd)(this.el, this._onAnimationEnd);

      if (!this.isAttributeEnabled('closed')) {
        // open the modal if it's not explicitly closed
        this.open();
      }
    }
  }, {
    key: 'detachedCallback',
    value: function detachedCallback() {
      _get(MPModal.prototype.__proto__ || Object.getPrototypeOf(MPModal.prototype), 'detachedCallback', this).apply(this, arguments);
      document.body.removeEventListener('keydown', this.maybeCloseOnEscape);
      (0, _utils.offAnimationEnd)(this.el, this._onAnimationEnd);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name) {
      _get(MPModal.prototype.__proto__ || Object.getPrototypeOf(MPModal.prototype), 'attributeChangedCallback', this).apply(this, arguments);
      if (this.initialized && name === 'closed') {
        if (this.isAttributeEnabled('closed')) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }, {
    key: 'config',
    get: function get() {
      var _this3 = this;

      return { css: css, template: template,
        useShadowDom: true,
        defaultState: {
          visibility: VISIBILITY_CLOSED
        },
        helpers: {
          backdropClicked: function backdropClicked() {
            if (_this3.isAttributeEnabled('closeable')) {
              _this3.close();
            }
          },
          closeClicked: function closeClicked() {
            _this3.close();
          },
          getModalStyles: function getModalStyles() {
            var style = {};
            if (_this3.getAttribute('width')) {
              style.width = _this3.getAttribute('width');
            }
            return style;
          },
          getType: function getType() {
            return _this3.getAttribute('modal-type') || 'modal';
          }
        }
      };
    }
  }]);

  return MPModal;
}(_panel.Component);

if (window['mp-common-registered-components']['mp-modal'] !== true) {
  document.registerElement('mp-modal', MPModal);
  window['mp-common-registered-components']['mp-modal'] = true;
}