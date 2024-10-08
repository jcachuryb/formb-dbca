import Checkbox from './elements/checkbox';
import InputElement from './elements/input-element';
import SelectElement from './elements/select-element';
import { ELEMENT_TYPES } from './utils/element-types';
import RadioButton from './elements/radio-button';
import { INPUT_TYPES } from './utils/input-types';

export const CONTROLS_STORE = {
  [ELEMENT_TYPES.INPUT]: {
    name: 'Input Control',
    description: 'A simple input control',
    props: {
      label: 'Enter a value',
    },
    attr: {
      type: INPUT_TYPES.TEXT,
      placeholder: 'Enter a value',
      required: true,
    },
    icon: 'fa fa-font',
    controlClass: InputElement,
  },
  [ELEMENT_TYPES.INPUT_NUMBER]: {
    name: 'Input Number',
    description: 'A simple number control',
    props: {
      label: 'Enter a value',
    },
    attr: {
      type: INPUT_TYPES.NUMBER,
      placeholder: 'Enter a value',
      required: true,
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
  [ELEMENT_TYPES.RADIO]: {
    name: 'Radio Control',
    description: 'A simple radio control',
    props: { options: [{ text: 'Radio Option 1' }, { text: 'Radio Option 2' }], labelClass: 'form-check-label' },
    attr: {},
    icon: 'fa fa-font',
    controlClass: RadioButton,
  },
};
