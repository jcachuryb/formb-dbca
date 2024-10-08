import InputControl from '../fb-input-control';
import { markup } from '../../js/utils';
import { INPUT_TYPES } from '../utils/input-types';

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
    super(_attr, props, _attr.type);
    this.setup();
  }

  setup() {
    this.type = this.props.type || defaultSettings.type;
    if ([INPUT_TYPES.TEXT, INPUT_TYPES.NUMBER].includes(this.attr.type)) {
      this.attr['class'] = 'form-control';
    }
  }

  render() {
    const attributes = this.getAttributes();
    return super.render(markup('input', '', attributes));
  }
}
