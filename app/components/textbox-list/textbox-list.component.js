const TextboxList = {
  template: require('./textbox-list.view.html'),
  restrict: 'E',
  bindings: {
    items: '<'
  },
  controllerAs: 'tbList'
};

export default TextboxList;