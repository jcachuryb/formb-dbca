import { CONTROL_TYPES, registered_controls } from '../controls/control-utils';
import Label from '../controls/elements/basics/label';
import Control from './fb-control';
import FBGroup from './fb-group';
import { markup } from './utils';

export default class InputControl extends Control {
  constructor(attr, props, control_type) {
    super(attr, props, control_type || CONTROL_TYPES.ELEMENT);
    this.label = new Label(props['label'] || ''); // Default label
    this._basicSetup();
    this.setup();
  }

  setLabel(newLabel) {
    this.label.innerHTML = newLabel;
  }

  _basicSetup() {
    this.label.text = this.props?.label || 'NO Label';
  }
  setup() {
    console.log('Setup method called');
  }

  getAttributes() {
    const attributes = {};
    for (let key in this.attr) {
      attributes[key] = this.attr[key];
    }
    return attributes;
  }

  render() {
    const children = [];
    if (this.label) {
      const label = markup('label', this.label.text, this.label);
      children.push(label);
    }

    return super.render([markup('div', children, { id: this.id })], 'formarea-control');
  }
}
