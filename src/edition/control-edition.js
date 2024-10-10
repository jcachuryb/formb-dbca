import { CONTROL_TYPES } from '../controls/utils/control-types';
import Control from '../js/fb-control';
import { appSelectors } from '../js/selectors';
import { generateRandomId, markup } from '../js/utils';
import controlWrapperTemplate from '../views/control-edition/control-edition-wrapper.handlebars';
import displayBlockTemplate from '../views/control-edition/display-block.handlebars';
import Modal from 'bootstrap/js/dist/modal.js';

export default class ControlEdition extends Control {
  id = 'element-wrapper-' + generateRandomId();
  modal = null;
  initialProps;
  constructor(control) {
    super({}, {}, CONTROL_TYPES.BLOCK);
    this.control = control;
    this._editControl({
      data: this,
    });
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
    const modalIdSelector = `#${appSelectors.modalControlEdition}`;
    const $m = $(modalIdSelector);

    if (_this.control && _this.control.displayControlProps) {
      $m.find('#display-tab-pane form').empty().append(_this.control.displayControlProps.render());
      _this.control.displayControlProps.addChangeEvents(_this, _this._onPropsChange);
      _this.initialProps = _this.control.displayControlProps.getPropsValues();
      $m.find('#preview-edition').empty().append(_this.control.render(_this.initialProps));
      // Fill in the values DONE
      // Add events?
      // Add validation?
    }
    this.modal = new Modal(document.querySelector(modalIdSelector), {
      keyboard: true,
      backdrop: true,
    });
    this.modal.toggle();

    console.log('Adding Control values');
    $m.find('.modal-footer .btn-primary').on('click', this, this._saveControl);
  }

  _onPropsChange(e) {
    const _this = e.data;

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log('Field value changed to: ', value);

    // _this.control.displayControlProps.props[e.target.name].value = value;
    // _this.initialProps.props[e.target.name].value = value;
    // console.log('Field value changed to: ', this.prop.value);
  }

  _saveControl(event) {
    const _this = event.data;
    console.log('Saving Control values');

    _this.modal.toggle();
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
