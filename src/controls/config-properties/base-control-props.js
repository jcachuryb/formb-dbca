import { markup } from '../../js/utils';
import { CONTROL_PROPS_TYPES } from '../utils/control-props-types';
import ControlProp from './control-prop';

export default class BaseControlProps {
  props = [];

  constructor(propsList = []) {
    for (let i = 0; i < propsList.length; i++) {
      const prop = propsList[i];
      let cp = new ControlProp(prop);
      this.props.push(cp);
    }
  }

  render() {
    return markup(
      'div',
      this.props.map((prop) => prop.render()),
      { class: 'formarea-control' },
    );
  }
}
