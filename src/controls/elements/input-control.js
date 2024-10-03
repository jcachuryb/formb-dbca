import Control from '../../js/control';
import { markup } from '../../js/utils';

import { CONTROL_TYPES } from '../control-utils';

const inputTypes = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  NUMBER: 'number',
  DATE: 'date',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
};
const defaultSettings = {
  type: 'text',
  value: '',
  showLabel: true,
  label: 'Input Text',
  labelPosition: 'top',
  placeholder: '',
  width: '100%',
  height: '30px',
  containerClass: 'formarea-control',
};

export default class InputElement extends Control {
  constructor(type = inputTypes.TEXT, value = '', label = 'Input Text') {
    super(CONTROL_TYPES.INPUT_CONTROL);
    this.type = type;
    this.value = value;
    this.label = label;
    this.rawSettings = { ...defaultSettings, type, value };
  }

  setValue(newValue) {
    this.value = newValue;
  }

  getValue() {
    return this.value;
  }

  render() {
    const input = document.createElement('input');
    input.type = this.type;
    input.value = this.value;
    input.placeholder = this.placeholder;
    input.style.width = this.width;
    input.style.height = this.height;
    const label = document.createElement('label');
    label.innerHTML = this.label;
    return super.render([label, input], defaultSettings.containerClass);
  }
}
