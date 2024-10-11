import { generateRandomId, markup } from '../../js/utils';
import { CONTROL_PROPS_TYPES } from '../utils/control-props-types';
import { dataPropertiesStore, datasourceDataPropertiesStore } from './predefined/data-props-store';
import { propertiesStore } from './predefined/props-store';

const allProps = {
  ...propertiesStore,
  ...dataPropertiesStore,
  ...datasourceDataPropertiesStore,
};

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
    this.prop = { ...allProps[type] };
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
          name: this.prop.name,
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
      $(`#${this.id}`).on('change', { context, prop: this.prop }, cb);
    }

    if (this.prop.name === CONTROL_PROPS_TYPES.CUSTOM_CLASS) {
      $(`#${this.id}`).on('change', { context, prop: this.prop }, cb);
    } else if (this.prop.type === 'string') {
      $(`#${this.id}`).on('input', { context, prop: this.prop }, cb);
    }
  }
}

function _renderProp(basicProps, options = [], required = false) {
  const { id, type, value, placeholder } = basicProps;
  const inputType = type === 'boolean' ? 'checkbox' : type === 'string' ? 'text' : type;

  if (inputType === 'select') {
    const selectEl = markup('select', '', { id, required, class: 'form-control' });
    options.forEach((option) => {
      const optionEl = document.createElement('option');
      for (const key in option) {
        if (option.hasOwnProperty(key)) {
          optionEl[key] = option[key];
          if (key === value) {
            optionEl.selected = true;
          }
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
