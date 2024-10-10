import { CONTROL_PROPS_TYPES } from '../utils/control-props-types';
import BaseControlProps from './base-control-props';

const defProps = [
  CONTROL_PROPS_TYPES.LABEL,
  CONTROL_PROPS_TYPES.DESCRIPTION,
  CONTROL_PROPS_TYPES.TOOLTIP,
  CONTROL_PROPS_TYPES.CUSTOM_CLASS,
  CONTROL_PROPS_TYPES.HIDDEN,
  CONTROL_PROPS_TYPES.DISABLED,
  CONTROL_PROPS_TYPES.HIDE_LABEL,
];

export default class RadioDisplayProps extends BaseControlProps {
  constructor(props) {
    super(defProps);
    this.fillInProps(props);
  }

  render() {
    return super.render();
  }
}
