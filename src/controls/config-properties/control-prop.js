import { generateRandomId, markup } from '../../js/utils';
import { propertiesStore } from './predefined/props-store';

export default class ControlProp {
  id = 'prop-' + generateRandomId();
  prop; // Property object from propertiesStore
  // prop.name; // Name of the property
  // prop.title; // Title of the property
  // prop.type; // Type of the property
  // prop.placeholder; // Placeholder for the property
  // prop.required; // Is the property required
  // prop.options; // Options for the property for multiple choice
  // prop.value; // Value of the property

  constructor(type) {
    this.prop = propertiesStore[type];
  }

  renderProp() {
    const fieldId = `cp-${this.prop.name}`;
    markup(
      'div',
      [
        markup('label', this.prop.title, { for: fieldId }),
        renderProp(this.prop.type, this.prop.value, this.prop.options, this.prop.required),
      ],
      { id: this.id, class: 'form-group' },
    );
  }
}
function renderProp(type = 'input', value = '', options = [], required = falsed) {
  switch (type) {
    case 'string':
      return markup('input', '', { type: 'text', value, required });
    case 'number':
      return markup('input', '', { type: 'number', value, required });
    case 'boolean':
      return markup('input', '', { type: 'checkbox', checked: !!!value, required });
    case 'select':
      const selectEl = markup('select', '', { required });
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
    default:
      return markup('input', '', { type: 'text', value, required });
  }
}
