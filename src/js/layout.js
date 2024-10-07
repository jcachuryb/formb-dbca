import { registered_controls } from '../controls/control-utils';
import InputElement from '../controls/elements/input-element';
import { CONTROLS_STORE } from '../controls/toolbox-store';
import FBElement from './fb-element';
import { markup } from './utils';

const formAreaSel = 'formarea';
const controlsSel = 'formcomponents';
class LayoutController {
  constructor(builderElement, body) {
    this.b = builderElement;
    this.body = body;
    this.formArea = undefined;
    this.controlsPanel = undefined;
  }

  initialLayout(controls) {
    let formbuilder = markup('div', '', { id: 'formbuilder' });
    let controlsPanel = markup('div', '', { id: controlsSel, class: controlsSel });
    let builderArea = markup('div', '', {
      id: formAreaSel,
      class: formAreaSel,
      'data-content': 'Drag a field from the right to this area',
    });

    this.b.append(formbuilder);

    const formbuilderElement = $('#formbuilder');
    formbuilderElement.append(controlsPanel);
    formbuilderElement.append(builderArea);
    this.formArea = $(`#${formAreaSel}`);
    this.controlsPanel = $(`#${controlsSel}`);

    $(`.${formAreaSel}`).sortable({
      placeholder: 'ui-state-highlight',
      helper: 'clone',
      cursor: 'move',
      scroll: false,
      tolerance: 'pointer',
      over: function (event, ui) {
        // console.log('Over form');
      },
      update: function (event, ui) {
        if (ui.sender) {
          ui.sender.sortable('cancel');
          try {
            const data = ui.item[0].dataset;
            const controlType = data.controlType;
            const { attr, props, controlClass } = CONTROLS_STORE[controlType];
            const elm = new controlClass(attr, props);
            this.append(elm.render());
          } catch (error) {
            console.log("Couldn't append element", error);
          }
        }
      },
    });

    $(`.${controlsSel}`).sortable({
      helper: 'clone',
      cursor: 'move',
      scroll: false,
      tolerance: 'pointer',
      connectWith: `.${formAreaSel}`,
    });
    this.loadFormControls(controls, this.controlsPanel);
  }

  loadFormControls(controls, parent) {
    controls.forEach((control) => {
      if (!control.label) return;
      const controlElement = markup('div', markup('span', control.label), {
        class: 'control draggable-control',
        'data-controlType': control.type,
      });

      parent.append(controlElement);
    });
  }
}

export default LayoutController;
