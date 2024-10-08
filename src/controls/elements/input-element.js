import InputControl from '../fb-input-control';
import { markup } from '../../js/utils';
import { ELEMENT_TYPES } from '../control-utils';

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
    super(_attr, props, ELEMENT_TYPES.INPUT);
    this.setup();
  }

  setup() {
    this.type = this.props.type || defaultSettings.type;
    if (this.attr.type === 'text') {
      this.attr['class'] = 'form-control';
    }
  }

  render() {
    const attributes = this.getAttributes();
    return super.render(markup('input', '', attributes));
  }
}
