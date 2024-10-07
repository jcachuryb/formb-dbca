import Checkbox from './elements/checkbox';
import InputElement from './elements/input-control';
import SelectElement from './elements/select-control';
import { ELEMENT_TYPES } from './control-utils';

export const CONTROLS_STORE = {
  [ELEMENT_TYPES.INPUT]: {
    name: 'Input Control',
    description: 'A simple input control',
    props: {
      label: 'Enter a value',
      required: true,
    },
    attr: {
      type: 'text',
      placeholder: 'Enter a value',
    },
    icon: 'fa fa-font',
    controlClass: InputElement,
  },
  [ELEMENT_TYPES.SELECT]: {
    name: 'Select Control',
    description: 'A simple select control',
    props: {
      label: 'Select an option',
      required: true,
    },
    attr: {
      type: 'select',
    },
    icon: 'fa fa-font',
    controlClass: SelectElement,
  },
  [ELEMENT_TYPES.CHECK_BOX]: {
    name: 'Checkbox Control',
    description: 'A simple checkbox control',

    props: { label: 'Checkbox' },
    attr: {},
    icon: 'fa fa-font',
    controlClass: Checkbox,
  },
};
