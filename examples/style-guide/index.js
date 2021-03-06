import 'babel-polyfill'
import 'webcomponents.js/webcomponents';

import { Component } from 'panel';

import '../../lib/index';
import COLORS from '../../stylesheets/colors.json';
import { SVG_ICONS } from '../../lib/components/svg-icon';

import template from './index.jade';
import './index.styl';

document.registerElement('style-guide', class extends Component {
  get config() {
    return {
      defaultState: {
        blueToggleValue: 'option1',

        COLORS,
        SVG_ICONS,
      },
      helpers: {
        blueToggleChanged: ev => this.update({blueToggleValue: ev.detail.selected}),
        closeModal: selector => this.el.querySelector(selector).close(),
        openModal: selector => {
          this.el.querySelector(selector).open();
          return false;
        },
      },
      template,
    };
  }
});
