import Checkbox from './elements/checkbox';
import InputElement from './elements/input-control';
import RadioButton from './elements/radio-button';
import SelectElement from './elements/select-control';

// Input Element types

export const INPUT_TYPES = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  NUMBER: 'number',
  DATE: 'date',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
};

// constants
export const CONTROL_TYPES = {
  BLOCK: 'BLOCK',
  ROW: 'ROW',
  GROUP: 'GROUP',
  ELEMENT: 'ELEMENT',
  BASIC: 'BASIC',
};

export const ELEMENT_TYPES = {
  INPUT: 'input',
  SELECT: 'select',
  CHECK_BOX: 'checkbox',
  RADIO: 'radio',

  DIVIDER: 'divider',
  ROW: 'row',
  CONTAINER: 'container',
};

export const registered_controls = {
  [ELEMENT_TYPES.INPUT]: {
    name: 'Input Control',
    description: 'A simple input control',
    icon: 'fa fa-font',
    label: 'Enter your text',
    attributes: {
      type: 'text',
      placeholder: 'Enter your text',
    },
    props: {
      required: true,
    },
    control: InputElement,
  },
  [ELEMENT_TYPES.SELECT]: {
    name: 'Select Control',
    description: 'A simple select control',
    icon: 'fa fa-font',
    attributes: {},
    props: {
      required: true,
    },
    label: 'Select an option',

    control: SelectElement,
  },
  [ELEMENT_TYPES.CHECK_BOX]: {
    name: 'Checkbox Control',
    description: 'A simple checkbox control',
    icon: 'fa fa-font',
    label: 'Select your options',
    attributes: {
      name: {
        generate: true,
      },
    },

    control: Checkbox,
  },
  [ELEMENT_TYPES.RADIO]: {
    name: 'Radio Control',
    description: 'A simple radio control',
    icon: 'fa fa-font',
    label: 'Select your options',
    attributes: {
      name: {
        generate: true,
      },
    },
    control: RadioButton,
  },
};
