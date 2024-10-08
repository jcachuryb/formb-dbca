import { CONTROL_TYPES } from '../controls/utils/control-types';
import Control from '../js/fb-control';
import { generateRandomId, markup } from '../js/utils';
import controlWrapperTemplate from '../views/control-edition-wrapper.handlebars';

export default class ControlEdition extends Control {
  id = 'element-wrapper-' + generateRandomId();

  constructor(attr = {}, props = {}) {
    super(attr, {}, CONTROL_TYPES.BLOCK);
  }
  render() {
    return markup(
      'div',
      controlWrapperTemplate({
        title: 'Text Field',
      }),
      { ...this.attr, id: this.id, class: 'form-field' },
    );
  }

  addButtonEvents() {
    $(this.getIdSelector()).on('mouseenter mouseleave', this, this._mouseAction);
    $(this.getIdSelector()).find('.act-edit').on('click', this, this._editControl);
    $(this.getIdSelector()).find('.act-remove').on('click', this, this._removeControl);
  }

  _editControl(event) {
    const _this = event.data;
    console.log('Edit Control');
  }

  _removeControl(event) {
    const _this = event.data;
    $(_this.getIdSelector()).fadeOut('fast', () => {
      $(_this.getIdSelector()).remove();
    });
  }

  _mouseAction(event) {
    const _this = event.data;
    if (event.type === 'mouseenter') {
      $(_this.getIdSelector()).addClass('active-control');
    } else {
      $(_this.getIdSelector()).removeClass('active-control');
    }
  }
}
