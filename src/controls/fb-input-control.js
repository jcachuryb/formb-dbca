import { ELEMENT_TYPES } from './utils/element-types';
import { CONTROL_TYPES } from './utils/control-types';
import Label from './elements/basics/label';
import Control from '../js/fb-control';
import { markup } from '../js/utils';

function extractLabelProps(props = {}) {
  const labelProps = {};
  for (let key in props) {
    if (key.startsWith('label') && key !== 'label') {
      let _key = key.replace('label', '').toLowerCase();
      labelProps[_key] = props[key];
    }
  }
  return labelProps;
}

export default class InputControl extends Control {
  container_class = 'formarea-control';
  element_type;
  constructor(attr, props, element_type) {
    super(attr, props, CONTROL_TYPES.ELEMENT);
    this.element_type = element_type || ELEMENT_TYPES.INPUT;
    this.label = new Label(props['label'] || '', extractLabelProps(props)); // Default label
    this._basicSetup();
    this.setup();
  }

  setLabel(newLabel) {
    this.label.innerHTML = newLabel;
  }

  _basicSetup() {
    this.label.text = this.props?.label || 'No Label set';
    this.container_class = this.props?.container_class || this.container_class;
  }

  setup() {
    console.log('Setup method called');
  }

  getAttributes() {
    const attributes = {};
    for (let key in this.attr) {
      attributes[key] = this.attr[key];
    }
    return attributes;
  }

  render(children = []) {
    if (!Array.isArray(children)) {
      children = [children];
    }
    if (this.label) {
      if (this.element_type === ELEMENT_TYPES.CHECK_BOX) {
        children.push(this.label.render());
      } else {
        children.unshift(this.label.render());
      }
    }

    return super.render([markup('div', children, { id: this.id })], this.container_class);
  }

  displayProperties = [
    'label',
    'placeholder',
    'customClass',
    'description',
    'tooltip',
    'tabIndex',
    'hidden',
    'disabled',
    'hideLabel',
  ];

  dataProperties = [];
}
