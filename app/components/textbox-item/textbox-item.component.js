import TextboxItemController from './textbox-item.controller';
import './textbox-item.style.css';

const TextboxItem = {
  bindings: {
    model: '<',
    index: '<',
    isLast: '<'
  },
  template: require('./textbox-item.view.html'),
  controller: TextboxItemController,
  controllerAs: 'tb'
};

export default TextboxItem;