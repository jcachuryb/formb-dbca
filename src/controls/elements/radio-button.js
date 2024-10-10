import InputControl from '../fb-input-control';
import { generateRandomId, markup } from '../../js/utils';
import { ELEMENT_TYPES } from '../utils/element-types';

import InputElement from './input-element';
import RadioDisplayProps from '../config-properties/radio-properties';
import { CONTROL_PROPS_TYPES } from '../utils/control-props-types';

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
  options = defaultProps.options;

  constructor(attr = {}, props = {}) {
    let _attr = Object.assign({}, defaultSettings, attr);
    let _props = Object.assign({}, defaultProps, props);
    super(_attr, _props, ELEMENT_TYPES.RADIO);
    this.name = 'rb-' + generateRandomId();
    this.setup();
  }

  setup() {
    this.displayControlProps = new RadioDisplayProps(this.props);

    const opt = this.props.options;
    this.options = [];
    for (let i = 0; i < opt.length; i++) {
      const elementId = `${this.name}-${i + 1}`;
      const inputEl = new InputElement(
        { type: 'radio' },
        {
          type: 'radio',
          label: opt[i].text,
          labelFor: elementId,
          labelClass: 'form-check-label',
          name: this.name,
          id: elementId,
          class: 'form-check-input',
        },
      );
      this.options.push(inputEl);
    }
  }

  renderControl() {
    const props = {
      [CONTROL_PROPS_TYPES.LABEL]: this.displayControlProps.props[CONTROL_PROPS_TYPES.LABEL].value,
      options: this.options,
    };

    const options = props.options;
    this.label.text = props[CONTROL_PROPS_TYPES.LABEL];
    const radioButtons = options.map((opt) => markup('div', opt.render(), { class: 'form-check' }));
    return super.render(radioButtons, 'formarea-control');
  }

  render(customProps, attr) {
    const props = customProps ?? this.displayControlProps.getPropsValues();
    const options = props.options ?? this.options;
    this.label.text = props[CONTROL_PROPS_TYPES.LABEL];
    const radioButtons = options.map((opt) => markup('div', opt.render(), { class: 'form-check' }));
    return super.render(radioButtons, 'formarea-control');
  }
}
