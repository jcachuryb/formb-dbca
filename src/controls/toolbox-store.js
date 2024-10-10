import Checkbox from './elements/checkbox';
import InputElement from './elements/input-element';
import SelectElement from './elements/select-element';
import { ELEMENT_TYPES } from './utils/element-types';
import RadioButton from './elements/radio-button';
import { INPUT_TYPES } from './utils/input-types';

export const CONTROLS_STORE = {
  [ELEMENT_TYPES.INPUT]: {
    description: 'A simple input control',
    props: {
      name: 'Input Control',
      label: 'Enter a value',
      placeholder: 'Enter a value in the text field',
      required: true,
      type: INPUT_TYPES.TEXT,
    },
    attr: {
      type: INPUT_TYPES.TEXT,
    },
    icon: 'fa fa-font',
    controlClass: InputElement,
  },
  [ELEMENT_TYPES.INPUT_NUMBER]: {
    description: 'A simple number control',
    props: {
      name: 'Input Number',
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
    description: 'A simple select control',
    props: {
      name: 'Select Control',
      label: 'Select an option',
      required: true,
      options: [
        { text: 'Select Option 1', value: 'option1' },
        { text: 'Select Option 2', value: 'option2' },
      ],
    },
    attr: {
      type: 'select',
    },
    icon: 'fa fa-font',
    controlClass: SelectElement,
  },
  [ELEMENT_TYPES.CHECK_BOX]: {
    description: 'A simple checkbox control',
    name: 'Checkbox Control',
    props: { label: 'Checkbox', checked: true },
    attr: {},
    icon: 'fa fa-font',
    controlClass: Checkbox,
  },
  [ELEMENT_TYPES.RADIO]: {
    description: 'A simple radio control',
    props: {
      label: 'Pick a shoe',
      options: [{ text: 'Radio Option 1' }, { text: 'Radio Option 2' }],
      labelClass: 'form-check-label',
    },
    name: 'Radio Control',
    attr: {},
    icon: 'fa fa-font',
    controlClass: RadioButton,
  },
};
