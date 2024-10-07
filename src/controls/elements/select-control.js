import InputControl from '../../js/fb-input-control';
import { markup } from '../../js/utils';
import { CONTROL_TYPES } from '../control-utils';

const defaultSettings = {
  value: '',
  showLabel: true,
  label: 'Select an option',
  labelPosition: 'top',

  placeholder: '',
  width: '100%',
  height: '30px',
};

const basicOptions = [
  {
    value: '',
    text: '-- Select an option --',
    disabled: true,
    selected: true,
  },
  {
    value: '1',
    text: 'Option 1',
  },
  {
    value: '2',
    text: 'Option 2',
  },
];

export default class SelectElement extends InputControl {
  options = basicOptions;

  constructor(attr = {}, props = {}) {
    let _attr = Object.assign({}, defaultSettings, attr);
    super(_attr, props, CONTROL_TYPES.ELEMENT);
    this.setup();
  }

  setup() {
    this.options = this.props.options || this.options;
  }

  setValue(newValue) {
    this.value = newValue;
  }

  getValue() {
    return this.value;
  }

  render() {
    const attributes = this.getAttributes();
    const selectEl = markup('select', '', attributes);
    this.options.forEach((option) => {
      const optionEl = document.createElement('option');
      for (const key in option) {
        if (option.hasOwnProperty(key)) {
          if (key === 'text') {
            optionEl.innerHTML = option[key];
            continue;
          }
          optionEl.setAttribute(key, option[key]);
        }
      }
      selectEl.appendChild(optionEl);
    });
    const _rendered = super.render();
    _rendered.appendChild(selectEl);
    return _rendered;
  }
}
