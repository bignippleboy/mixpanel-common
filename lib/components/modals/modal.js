import { Component } from 'panel';

import { registerMPComponent } from  '../registration.js';

import template from './modal.jade';

import css from './modal.styl';

import { onAnimationEnd, offAnimationEnd } from '../utils';

const VISIBILITY_OPEN = 'open';
const VISIBILITY_OPENING = 'opening';
const VISIBILITY_CLOSED = 'closed';
const VISIBILITY_CLOSING = 'closing';

registerMPComponent('mp-modal', class extends Component {
  get config() {
    return {
      css,
      template,
      useShadowDom: true,
      defaultState: {
        visibility: VISIBILITY_CLOSED,
      },
      helpers: {
        backdropClicked: () => {
          if (this.isAttributeEnabled('closeable')) {
            this.close();
          }
        },
        closeClicked: () => {
          this.close();
        },
        getModalStyles: () => {
          const style = {};
          if (this.getAttribute('width')) {
            style.width = this.getAttribute('width');
          }
          return style;
        },
        getType: () => {
          return this.getAttribute('modal-type') || 'modal';
        },
      },
    };
  }

  close() {
    switch(this.state.visibility) {
      case VISIBILITY_CLOSED:
      case VISIBILITY_CLOSING:
        break;
      case VISIBILITY_OPENING:
        this.update({visibility: VISIBILITY_CLOSED});
        break;
      case VISIBILITY_OPEN:
        this._pendingAnimations = ['fadeModalOut'];
        if (this.config.helpers.getType() === 'modal') {
          this._pendingAnimations.push('fadeOverlayOut');
        }
        this.update({visibility: VISIBILITY_CLOSING});
        break;
    }
  }

  open() {
    switch(this.state.visibility) {
      case VISIBILITY_OPEN:
      case VISIBILITY_OPENING:
        break;
      case VISIBILITY_CLOSING:
        this.update({visibility: VISIBILITY_OPEN});
        break;
      case VISIBILITY_CLOSED:
        this._pendingAnimations = ['fadeModalIn'];
        if (this.config.helpers.getType() === 'modal') {
          this._pendingAnimations.push('fadeOverlayIn');
        }
        this.update({visibility: VISIBILITY_OPENING});
        break;
    }
  }

  attachedCallback() {
    super.attachedCallback(...arguments);

    // listen for escape keypress
    this.maybeCloseOnEscape = (e) => {
      if (this.isAttributeEnabled('closeable') && e.keyCode === 27) {
        this.close();
      }
    };
    document.body.addEventListener('keydown', this.maybeCloseOnEscape);

    // transition between states after animations complete
    this._onAnimationEnd = e => {
      if (this._pendingAnimations.length === 0) {
        return;
      }
      this._pendingAnimations = this._pendingAnimations.filter(anim => anim !== e.animationName);
      if (this._pendingAnimations.length > 0) {
        return;
      }
      switch(this.state.visibility) {
        case VISIBILITY_OPENING:
          this.update({visibility: VISIBILITY_OPEN});
          this.dispatchEvent(new CustomEvent('change', {detail: {state: VISIBILITY_OPEN}}));
          break;
        case VISIBILITY_CLOSING:
          this.update({visibility: VISIBILITY_CLOSED});
          this.dispatchEvent(new CustomEvent('change', {detail: {state: VISIBILITY_CLOSED}}));
          break;
      }
    };
    onAnimationEnd(this.el, this._onAnimationEnd);

    if (!this.isAttributeEnabled('closed')) { // open the modal if it's not explicitly closed
      this.open();
    }
  }

  detachedCallback() {
    super.detachedCallback(...arguments);
    document.body.removeEventListener('keydown', this.maybeCloseOnEscape);
    offAnimationEnd(this.el, this._onAnimationEnd);
  }

  attributeChangedCallback(name) {
    super.attributeChangedCallback(...arguments);
    if (this.initialized && name === 'closed') {
      if (this.isAttributeEnabled('closed')) {
        this.close();
      } else {
        this.open();
      }
    }
  }
});
