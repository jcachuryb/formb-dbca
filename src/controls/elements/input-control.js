import { container } from 'webpack';
import Control from '../../js/control';
import { markup } from '../../js/utils';
const CONTROL_TYPES = {
  INPUT_CONTROL: 'input-control',
  SELECT: 'select',
  CHECK_BOX: 'checkbox',
};

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
  label: '',
  labelPosition: 'top',
  placeholder: '',
  width: '100%',
  height: '30px',
  containerClass: 'formarea-control',
};

export default class InputElement extends Control {
  constructor(type = inputTypes.TEXT, value = '') {
    this.type = type;
    this.value = value;
    this.rawSettings = { ...defaultSettings, type, value };
    super(CONTROL_TYPES.INPUT_CONTROL);
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
    return super.render([label, input], 'formarea-control');
  }
}
