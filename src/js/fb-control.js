import { generateRandomId, markup } from './utils';

export default class Control {
  id = '';

  attr = {};

  props = {};

  className = '';

  controlType = 'BLOCK';

  constructor(attr, props, controlType, id = null) {
    this.controlType = controlType;
    this.attr = attr;
    this.props = props;
    this.events = {};
    if (!id) {
      this.id = (this.controlType.toLocaleLowerCase() + '-' + generateRandomId()).toLowerCase();
    }
  }

  setup() {
    console.log('Setup method called');
  }

  render(children = [], containerClass = '') {
    // Implement rendering logic here
    const container = markup('div', '', { id: this.id, class: containerClass ?? this.rawSettings.containerClass });
    children.forEach((child) => {
      container.appendChild(child);
    });
    return container;
  }

  on(event, handler) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(handler);
  }

  off(event, handler) {
    if (!this.events[event]) return;

    const index = this.events[event].indexOf(handler);
    if (index > -1) {
      this.events[event].splice(index, 1);
    }
  }

  trigger(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((handler) => handler(...args));
  }
}
