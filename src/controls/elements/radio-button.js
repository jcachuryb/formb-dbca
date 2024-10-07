import InputControl from '../../js/fb-input-control';
import { generateRandomId, markup } from '../../js/utils';
import { ELEMENT_TYPES } from '../control-utils';
import InputElement from './input-control';

const defaultSettings = {
  class: 'form-check-input',
};

const defaultProps = {
  options: [
    {
      text: 'Option 1',
    },
    {
      text: 'Option 2',
    },
  ],
};

export default class RadioButton extends InputControl {
  name = 'rb-' + generateRandomId();
  options = defaultProps.options;

  constructor(attr = {}, props = {}) {
    let _attr = Object.assign({}, defaultSettings, attr);
    let _props = Object.assign({}, defaultProps, props);
    super(_attr, _props, ELEMENT_TYPES.RADIO);
    this.setup();
  }

  setup() {
    const opt = this.props.options;
    this.options = [];
    for (let i = 0; i < opt.length; i++) {
      const elementId = `${this.name}-${i + 1}`;
      const inputEl = new InputElement(
        { type: 'radio', name: this.name, id: elementId, class: 'form-check-input', container_class: '' },
        { label: opt[i].text, labelFor: elementId, labelClass: 'form-check-label' },
      );
      this.options.push(inputEl);
    }
  }

  render() {
    const radioButton = this.options.map((opt) => markup('div', opt.render(), { class: 'form-check' }));
    return super.render(radioButton, 'formarea-control');
  }
}
