import { generateRandomId, markup } from '../../js/utils';
import { propertiesStore } from './predefined/props-store';

export default class ControlProp {
  prop; // Property object from propertiesStore
  /* name */
  /* title */
  /* type */
  /* placeholder */
  /* required */
  /* options */
  /* value */

  constructor(type) {
    this.prop = propertiesStore[type];
    this.id = `cp-${this.prop.name}`;
  }

  renderProp() {
    const children = [
      markup('label', this.prop.title, {
        for: this.id,
        class: this.prop.type === 'boolean' ? 'form-check-label' : 'form-label',
      }),
      _renderProp(
        {
          id: this.id,
          type: this.prop.type,
          value: this.prop.value,
          placeholder: this.prop.placeholder,
        },
        this.prop.options,
        this.prop.required,
      ),
    ];
    if (this.prop.type === 'boolean') {
      children.reverse();
    }
    return markup('div', children, { id: this.id, class: 'form-check mb-3' });
  }

  addChangeEvent(context, cb) {
    if (!cb) return;
    if (this.prop.type === 'boolean') {
      $(`#${this.id}`).on('change', context, cb);
    }
    if (this.prop.type === 'string') {
      $(`#${this.id}`).on('input', context, cb);
    }
  }
}

function _renderProp(basicProps, options = [], required = falsed) {
  const { id, type, value, placeholder } = basicProps;
  const inputType = type === 'boolean' ? 'checkbox' : type === 'string' ? 'text' : type;

  if (inputType === 'select') {
    const selectEl = markup('select', '', { id, required, class: 'form-control' });
    options.forEach((option) => {
      const optionEl = document.createElement('option');
      for (const key in option) {
        if (option.hasOwnProperty(key)) {
          optionEl[key] = option[key];
        }
      }
      selectEl.appendChild(optionEl);
    });
    return selectEl;
  }
  if (inputType === 'checkbox') {
    const checkboxProps = { id, type: inputType, required, class: 'form-check-input' };
    if (value) {
      checkboxProps.checked = value;
    }
    return markup('input', '', checkboxProps);
  }

  return markup('input', '', { id, type: inputType, value, placeholder, required, class: 'form-control' });
}
