import Checkbox from './elements/checkbox';
import InputElement from './elements/input-control';
import SelectElement from './elements/select-control';
import { CONTROL_TYPES } from './control-utils';

export const CONTROLS_STORE = {
  [CONTROL_TYPES.INPUT_CONTROL]: {
    name: 'Input Control',
    description: 'A simple input control',
    icon: 'fa fa-font',
    control: InputElement,
  },
  [CONTROL_TYPES.SELECT]: {
    name: 'Select Control',
    description: 'A simple select control',
    icon: 'fa fa-font',
    control: SelectElement,
  },
  [CONTROL_TYPES.CHECK_BOX]: {
    name: 'Checkbox Control',
    description: 'A simple checkbox control',
    icon: 'fa fa-font',
    control: Checkbox,
  },
};
