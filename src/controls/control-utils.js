import Checkbox from './elements/checkbox';
import InputElement from './elements/input-control';
import SelectElement from './elements/select-control';

// constants
const CONTROL_TYPES = {
  INPUT_CONTROL: 'input-control',
  SELECT: 'select',
  CHECK_BOX: 'checkbox',
};

const registered_controls = {
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

// export default cUtils = { CONTROL_TYPES: CONTROL_TYPES, registered_controls: registered_controls };
