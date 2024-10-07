import Control from '../../js/fb-control';

import { CONTROL_TYPES } from '../control-utils';

const defaultSettings = {
  value: '',
  showLabel: true,
  label: '',
  labelPosition: 'top',
  options: [
    {
      value: '1',
      text: 'Option 1',
    },
    {
      value: '2',
      text: 'Option 2',
    },
  ],
  placeholder: '',
  width: '100%',
  height: '30px',
};

export default class Checkbox extends Control {
  constructor(options = defaultSettings.options, value = '') {
    super(CONTROL_TYPES.CHECK_BOX);
    this.options = options;
    this.rawSettings = { ...defaultSettings, type, value };
  }

  setValue(newValue) {
    this.value = newValue;
  }

  getValue() {
    return this.value;
  }

  render() {
    const selectEl = document.createElement('select');
    this.options.forEach((option) => {
      const optionEl = document.createElement('option');
      optionEl.value = option.value;
      optionEl.text = option.text;
      selectEl.appendChild(optionEl);
    });
    const label = document.createElement('label');
    label.innerHTML = this.label;
    const container = markup('div', '', { class: 'formarea-control' });
    container.appendChild(label);

    container.appendChild(selectEl);
    return container;
  }
}
