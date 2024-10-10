import InputControl from '../fb-input-control';
import { markup } from '../../js/utils';
import { INPUT_TYPES } from '../utils/input-types';
import TextFieldDisplayProps from '../config-properties/input-properties';
import { CONTROL_PROPS_TYPES } from '../utils/control-props-types';

const defaultSettings = {
  type: 'text',
  value: '',
  [CONTROL_PROPS_TYPES.PLACEHOLDER]: 'Enter a value here',
  [CONTROL_PROPS_TYPES.LABEL]: 'Text field',
};

const defaultAttributes = {
  class: 'formarea-control',
};

export default class InputElement extends InputControl {
  constructor(attr = {}, props = {}) {
    let _props = Object.assign({}, defaultSettings, props);
    super(attr, _props, attr.type);
    this.setup();
  }

  setup() {
    this.displayControlProps = new TextFieldDisplayProps(this.props);
    this.type = this.props.type || defaultSettings.type;
    if (this.type === 'radio') {
      delete this.displayControlProps.props[CONTROL_PROPS_TYPES.PLACEHOLDER];
      this.attr['class'] = 'form-check-input';
      this.id = this.props.id;
    }

    if ([INPUT_TYPES.TEXT, INPUT_TYPES.NUMBER].includes(this.attr.type)) {
      this.attr['class'] = 'form-control';
    }
  }

  renderControl() {
    const props = this.displayControlProps.getPropsValues();

    return this.render({
      id: this.id,
      name: this.props.name,
      [CONTROL_PROPS_TYPES.LABEL]: props[CONTROL_PROPS_TYPES.LABEL],
      [CONTROL_PROPS_TYPES.PLACEHOLDER]: props[CONTROL_PROPS_TYPES.PLACEHOLDER],
      [CONTROL_PROPS_TYPES.CUSTOM_CLASS]: props[CONTROL_PROPS_TYPES.CUSTOM_CLASS],
    });
  }

  render(customProps, attr) {
    const props = customProps ?? this.displayControlProps.getPropsValues();
    const attributes = {
      id: props.id ?? this.id,
      type: this.type,
      value: this.value,
      placeholder: props[CONTROL_PROPS_TYPES.PLACEHOLDER] ?? '',
      class: this.attr.class.concat(props[CONTROL_PROPS_TYPES.CUSTOM_CLASS] ?? ''),
    };

    if (this.type === 'radio') {
      attributes.name = this.props.name;
      delete attributes.placeholder;
      delete attributes.value;
    }
    this.label.text = props[CONTROL_PROPS_TYPES.LABEL];

    return super.render(markup('input', '', attributes));
  }
}
