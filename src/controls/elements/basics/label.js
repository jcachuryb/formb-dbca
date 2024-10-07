import Control from '../../../js/fb-control';
import { markup } from '../../../js/utils';
import { CONTROL_TYPES } from '../../control-utils';

export default class Label extends Control {
  constructor(text = '') {
    super({}, {}, CONTROL_TYPES.BASIC);
    this.text = text;
  }

  render() {
    return markup('label', this.text);
  }
}
