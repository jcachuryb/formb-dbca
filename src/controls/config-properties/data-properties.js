import { CONTROL_DATA_PROPS_TYPES } from '../utils/control-props-types';
import BaseControlProps from './base-control-props';

const multiSelectProps = [CONTROL_DATA_PROPS_TYPES.DATASOURCE, CONTROL_DATA_PROPS_TYPES.DEFAULT_VALUE];

const defProps = [CONTROL_DATA_PROPS_TYPES.MULTI, CONTROL_DATA_PROPS_TYPES.DEFAULT_VALUE];

export default class BasicDataProperties extends BaseControlProps {
  constructor(props) {
    super(defProps);
    this.fillInProps(props);
  }

  render() {
    return super.render();
  }
}
