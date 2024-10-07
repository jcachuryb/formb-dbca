import { CONTROL_TYPES, registered_controls } from '../controls/control-utils';
import Label from '../controls/elements/basics/label';
import Control from './fb-control';
import FBGroup from './fb-group';
import { markup } from './utils';

export default class FBElement extends FBGroup {
  value = null;
  label = null;

  constructor(element_type, attr = {}, props = {}) {
    super(attr, props, CONTROL_TYPES.ELEMENT);
    this.element_type = element_type;
    this.events = {};

    this.controlClass = registered_controls[element_type].control;
    this._control = new this.controlClass();
    this.label = new Label(props['label'] || ''); // Default label
  }

  setValue(newValue) {
    this.value = newValue;
  }

  getValue() {
    return this.value;
  }

  setLabel(newLabel) {
    this.label = newLabel;
  }

  render() {
    const children = [];
    if (this.label) {
      const label = markup('label', this.label);
      children.push(label);
    }
    const element = new this.controlClass();
    let control = markup('div', element.render(), { class: 'formarea-control' });

    return markup('div', '', { id: this.id, class: this.rawSettings.containerClass });
  }
}
