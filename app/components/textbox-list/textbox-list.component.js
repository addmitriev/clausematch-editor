import TextboxListController from './textbox-list.controller';

const TextboxList = {
  template: require('./textbox-list.view.html'),
  restrict: 'E',
  bindings: {
    items: '<'
  },
  controller: TextboxListController,
  controllerAs: 'tbList'
};

export default TextboxList;