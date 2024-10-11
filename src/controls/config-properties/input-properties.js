import { CONTROL_PROPS_TYPES } from '../utils/control-props-types';
import BaseControlProps from './base-control-props';

const textProps = [
  CONTROL_PROPS_TYPES.LABEL,
  CONTROL_PROPS_TYPES.PLACEHOLDER,
  CONTROL_PROPS_TYPES.DESCRIPTION,
  CONTROL_PROPS_TYPES.TOOLTIP,
  CONTROL_PROPS_TYPES.CUSTOM_CLASS,
  //   CONTROL_PROPS_TYPES.PREFIX,
  //   CONTROL_PROPS_TYPES.SUFFIX,
  //   CONTROL_PROPS_TYPES.TAB_INDEX,
  CONTROL_PROPS_TYPES.HIDDEN,
  CONTROL_PROPS_TYPES.DISABLED,
  CONTROL_PROPS_TYPES.HIDE_LABEL,
];

const radioProps = [
  CONTROL_PROPS_TYPES.LABEL,
  //   CONTROL_PROPS_TYPES.TAB_INDEX,
  CONTROL_PROPS_TYPES.CHECKED,
  CONTROL_PROPS_TYPES.DISABLED,
];

function getProps(type) {
  switch (type) {
    case 'radio':
      return radioProps;
    default:
      return textProps;
  }
}

export class TextFieldDisplayProps extends BaseControlProps {
  constructor(props) {
    super(textProps);
    this.fillInProps(props);
  }

  render() {
    return super.render();
  }
}

export class InputFieldDisplayProps extends BaseControlProps {
  constructor(type = 'text', props) {
    super(getProps(type));
    this.fillInProps(props);
  }

  render() {
    return super.render();
  }
}
