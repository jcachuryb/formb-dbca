import Control from '../../js/fb-control';
import InputControl from '../../js/fb-input-control';

import { markup } from '../../js/utils';

import { CONTROL_TYPES, INPUT_TYPES } from '../control-utils';

const defaultSettings = {
  type: 'text',
  value: '',
  placeholder: 'Enter a value',
  class: 'formarea-control',
  label: 'Enter a value',
  'max-length': 20,
};

export default class InputElement extends InputControl {
  constructor(attr = {}, props = {}) {
    let _attr = Object.assign({}, defaultSettings, attr); // Merge default settings with user settings
    super(_attr, props, CONTROL_TYPES.ELEMENT);
  }

  setup() {
    this.type = this.props.type || defaultSettings.type;
  }

  render() {
    const attributes = this.getAttributes();

    const _rendered = super.render();
    _rendered.append(markup('input', '', attributes));
    return _rendered;
  }
}
