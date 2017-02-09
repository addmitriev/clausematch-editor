import TextboxItemController from './textbox-item.controller';

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