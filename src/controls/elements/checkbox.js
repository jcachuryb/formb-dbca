import InputControl from '../../js/fb-input-control';
import { generateRandomId, markup } from '../../js/utils';

import { CONTROL_TYPES } from '../control-utils';

const defaultSettings = {
  class: 'form-check-input',
};

const defaultProps = {};

export default class Checkbox extends InputControl {
  id = 'cb-' + generateRandomId();
  constructor(attr = { value: 'default' }, props = {}) {
    let _attr = Object.assign({}, defaultSettings, attr);
    let _props = Object.assign({}, defaultProps, props);
    super(_attr, _props, CONTROL_TYPES.ELEMENT);
    this.setup();
  }

  setup() {
    this.options = this.props.options || this.options;
    this.label.attr.for = this.id;
  }

  render() {
    const inputElement = markup('input', '', { type: 'checkbox', id: this.id, ...this.attr });
    return super.render(inputElement);
  }
}
