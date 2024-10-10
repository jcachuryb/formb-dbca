import { CONTROLS_STORE } from '../controls/toolbox-store';
import ControlEdition from '../edition/control-edition';
import baseModalTemplate from '../views/control-edition/base-modal.handlebars';
import baseModalBodyEdition from '../views/control-edition/base-modal-edition.handlebars';

import { markup } from './utils';
import { appSelectors } from './selectors';

import Tab from 'bootstrap/js/dist/tab.js';

const formAreaSel = 'formarea';
const controlsSel = 'formcomponents';
export default class LayoutController {
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
      update: function (event, ui) {
        if (ui.sender) {
          ui.sender.sortable('cancel');
          try {
            const data = ui.item[0].dataset;
            const controlType = data.controlType;
            const { attr, props, controlClass } = CONTROLS_STORE[controlType];
            const elm = new controlClass(attr, props);
            const nodeOffset = ui.offset.top;
            formAreaRender(this, elm, nodeOffset);
          } catch (error) {
            console.log("Couldn't append element", error);
          }
        }
      },
    });
    $(`.${formAreaSel}`).disableSelection();

    $(`.${controlsSel}`).sortable({
      helper: 'clone',
      cursor: 'move',
      scroll: false,
      tolerance: 'pointer',
      placeholder: 'ui-state-highlight',
      connectWith: `.${formAreaSel}`,
    });

    this.loadFormControls(controls, this.controlsPanel);
    $(`.${controlsSel}`).disableSelection();

    this.insertModals();
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

  renderForm() {
    this.formArea.append(markup('div', 'Form Area', {}));
    const { attr, props, controlClass } = CONTROLS_STORE['radio'];
    const elm = new controlClass(attr, props);
    formAreaRender(this.formArea, elm);
  }

  insertModals() {
    const idSelector = appSelectors.modalControlEdition;
    this.b.append(
      baseModalTemplate({
        id: idSelector,
      }),
    );
    $(`#${appSelectors.modalControlEdition} .modal-body`).append(baseModalBodyEdition({ title: 'Test Modal' }));
    const triggerTabList = document.querySelectorAll('#tabsEdition button');
    triggerTabList.forEach((triggerEl) => {
      const tabTrigger = new Tab(triggerEl);

      triggerEl.addEventListener('click', (event) => {
        event.preventDefault();
        tabTrigger.show();
      });
    });
  }
}

function formAreaRender(formArea, control, nodeOffset = null) {
  const fbControlWrapper = new ControlEdition(control);

  const renderedControl = fbControlWrapper.render();
  $(renderedControl).find('.fb-wrapper-content').append(control.renderControl());
  appendControlEdition(formArea, renderedControl, nodeOffset);
  fbControlWrapper.addButtonEvents();
}

function appendControlEdition(parent, node, nodeOffset = null) {
  if (nodeOffset) {
    const childNodes = parent.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      const child = childNodes[i];
      if (parent.offsetTop > nodeOffset) {
        parent.insertBefore(node, child);
        return;
      }
    }
  }
  parent.append(node);
}
